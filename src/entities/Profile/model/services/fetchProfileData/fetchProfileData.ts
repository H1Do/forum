import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (userId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>(`/profile/${userId}`);

            if (!response.data) {
                throw new Error('Response data is empty');
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(String(error));
        }
    },
);
