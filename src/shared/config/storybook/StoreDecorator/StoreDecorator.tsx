import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: loginReducer,
};

export const StoreDecorator = (
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (
    (StoryComponent: Story) => (
        <StoreProvider
            initialState={initialState}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    ));
