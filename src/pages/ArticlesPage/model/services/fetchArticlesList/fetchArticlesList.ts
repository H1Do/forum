import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit,
    getArticlesPageNumber,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (props, thunkAPI) => {
        const page = getArticlesPageNumber(thunkAPI.getState());
        const limit = getArticlesPageLimit(thunkAPI.getState());
        const order = getArticlesPageOrder(thunkAPI.getState());
        const sort = getArticlesPageSort(thunkAPI.getState());
        const search = getArticlesPageSearch(thunkAPI.getState());
        const type = getArticlesType(thunkAPI.getState());

        try {
            addQueryParams({
                sort,
                order,
                search,
                type,
            });

            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === 'ALL' ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error('Response data is empty');
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(String(error));
        }
    },
);
