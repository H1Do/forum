import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const userData = getUserAuthData(thunkAPI.getState());
        const articleData = getArticleDetailsData(thunkAPI.getState());

        if (!userData || !text || !articleData) {
            return thunkAPI.rejectWithValue('Empty data');
        }

        try {
            const response = await thunkAPI.extra.api.post<Comment>('/comments', {
                articleId: articleData?.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error('Response data is empty');
            }

            thunkAPI.dispatch(fetchCommentsByArticleId(articleData.id));

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(String(error));
        }
    },
);
