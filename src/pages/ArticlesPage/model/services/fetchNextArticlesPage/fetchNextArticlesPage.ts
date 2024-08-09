import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const hasMore = getArticlesPageHasMore(thunkAPI.getState());
        const page = getArticlesPageNumber(thunkAPI.getState());
        const isLoading = getArticlesPageIsLoading(thunkAPI.getState());

        if (hasMore && !isLoading) {
            thunkAPI.dispatch(articlesPageActions.setPage(page + 1));
            thunkAPI.dispatch(fetchArticlesList({ page: page + 1 }));
        }
    },
);
