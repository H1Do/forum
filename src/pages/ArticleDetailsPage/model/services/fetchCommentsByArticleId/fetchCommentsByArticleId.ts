import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetailsComments/fetchCommentsByArticleId',
    async (id, thunkAPI) => {
        if (!id) {
            return thunkAPI.rejectWithValue('Empty article id');
        }

        try {
            const response = await thunkAPI.extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId: id,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error('Response data is empty');
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
