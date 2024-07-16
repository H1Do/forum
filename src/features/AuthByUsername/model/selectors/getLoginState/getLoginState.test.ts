import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginIsLoading.test', () => {
    test('Should return loginForm state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: false,
                error: 'something went wrong',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: '123',
            isLoading: false,
            error: 'something went wrong',
        });
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
