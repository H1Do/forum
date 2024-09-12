import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticlesById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async (id, thunkApi) => {
        try {
            const response = await thunkApi.extra.api.get<Article>(`/articles/${id}`, {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error('Response data is empty');
            }

            return response.data;
        } catch {
            return thunkApi.rejectWithValue('error');
        }
    },
);
