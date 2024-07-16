import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    afterEach(() => {
        jest.clearAllTimers();
    });

    test('Success', async () => {
        const userValue = { username: '123', id: '1' };
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ username: '123', id: '1' });
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    });

    test('Error', async () => {
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
