import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    '/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const inited = getArticlesPageInited(thunkAPI.getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            thunkAPI.dispatch(articlesPageActions.setOrder(orderFromUrl || 'asc'));
            thunkAPI.dispatch(articlesPageActions.setSort(sortFromUrl || 'createdAt'));
            thunkAPI.dispatch(articlesPageActions.setSearch(searchFromUrl || ''));
            thunkAPI.dispatch(articlesPageActions.setType(typeFromUrl) || ArticleType.ALL);

            thunkAPI.dispatch(articlesPageActions.initState());
            thunkAPI.dispatch(fetchArticlesList({}));
        }
    },
);
