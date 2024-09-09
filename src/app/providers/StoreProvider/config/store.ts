import {
    AnyAction, CombinedState, configureStore, Reducer, ReducersMapObject, ThunkDispatch,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { scrollRestorationReducer } from 'features/ScrollRestoration';
import { StateSchema, ThunkExtraArgument } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollRestoration: scrollRestorationReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgument: ThunkExtraArgument = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
            }),
        ],
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type AppThunkDispatch = ThunkDispatch<StateSchema, any, AnyAction>
