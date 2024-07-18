import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
    const profileValue = {
        username: 'admin',
        age: 21,
        country: Country.Russia,
        lastname: 'Latypov',
        first: 'Niyaz',
        city: 'Ufa',
        currency: Currency.RUB,
        avatar: '',
    };

    test('Success', async () => {
        const result = validateProfileData(profileValue);
        expect(result).toEqual([]);
    });

    test('Incorrect user data error', async () => {
        const data = {
            ...profileValue,
            first: '',
        };

        const result = validateProfileData(data);
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('Incorrect age error', async () => {
        const data = {
            ...profileValue,
            age: 0,
        };

        const result = validateProfileData(data);
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('Incorrect country error', async () => {
        const data = {
            ...profileValue,
            country: undefined,
        };

        const result = validateProfileData(data);
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('No data error', async () => {
        const result = validateProfileData();
        expect(result).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });
});
