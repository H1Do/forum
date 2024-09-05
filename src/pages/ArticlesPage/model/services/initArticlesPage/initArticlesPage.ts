import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    '/initArticlesPage',
    async (_, thunkAPI) => {
        const inited = getArticlesPageInited(thunkAPI.getState());

        if (!inited) {
            thunkAPI.dispatch(articlesPageActions.initState());
            thunkAPI.dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
