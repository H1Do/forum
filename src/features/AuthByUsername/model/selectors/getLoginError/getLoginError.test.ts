import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: false,
                error: 'something went wrong',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('something went wrong');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual('');
    });
});
