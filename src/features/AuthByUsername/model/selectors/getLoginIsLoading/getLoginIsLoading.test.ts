import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('Should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: false,
                error: 'something went wrong',
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
