import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';

const articlesValue = [
    { id: '1', title: '123' },
    { id: '2', title: '123' },
    { id: '3', title: '123' },
    { id: '4', title: '123' },
    { id: '5', title: '123' },
];

describe('fetchArticlesList.test', () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
        articlesPage: {
            page: 1,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true,
        },
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    test('Success', async () => {
        thunk.api.get.mockResolvedValue({ data: articlesValue });

        const result = await thunk.callThunk({});

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articlesValue);
    });

    test('Error', async () => {
        thunk.api.get.mockRejectedValue({});

        const result = await thunk.callThunk({});
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
