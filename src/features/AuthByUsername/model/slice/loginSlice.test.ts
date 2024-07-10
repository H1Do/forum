import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('Test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
        };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin'))).toEqual({
            ...state,
            username: 'admin',
        });
    });

    test('Test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '',
        };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({
            ...state,
            password: '123',
        });
    });
});
