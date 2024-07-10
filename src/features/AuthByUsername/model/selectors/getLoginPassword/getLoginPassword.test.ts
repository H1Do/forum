import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('Should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: false,
                error: 'something went wrong',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
});
