import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'something went wrong',
            },
        };

        expect(getProfileError(state as StateSchema)).toBe('something went wrong');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
