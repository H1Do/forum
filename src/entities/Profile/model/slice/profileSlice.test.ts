import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 21,
    country: Country.Russia,
    lastname: 'Latypov',
    first: 'Niyaz',
    city: 'Ufa',
    currency: Currency.RUB,
    avatar: '',
};

describe('profileSlice.test', () => {
    test('Test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({
            ...state,
            readonly: false,
        });
    });

    test('Test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            form: {
                ...data,
                first: 'NiyazKamaz',
            },
            data,
            validateErrors: undefined,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            ...state,
            form: state.data,
            readonly: true,
        });
    });

    test('Test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            form: data,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
            first: 'NiyazKamaz',
        }))).toEqual({
            ...state,
            form: {
                ...state.form,
                first: 'NiyazKamaz',
            },
        });
    });

    test('Test fetch profile data pending status', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
        };

        expect(profileReducer(state as ProfileSchema, fetchProfileData.pending)).toEqual({
            isLoading: true,
        });
    });

    test('Test update profile data fulfilled status', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            ...state,
            isLoading: false,
            data,
            form: data,
            readonly: true,
        });
    });
});
