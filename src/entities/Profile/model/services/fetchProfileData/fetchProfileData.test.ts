import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    afterEach(() => {
        jest.clearAllTimers();
    });

    test('Success', async () => {
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

        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileValue }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileValue);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });

    test('Error', async () => {
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
