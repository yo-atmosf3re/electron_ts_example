import {
    ReducersMapObject, combineReducers,
} from '@reduxjs/toolkit';
import { ReducerManagerI, StateSchema, StateSchemaKeyType } from './StateSchema';

/**
 *
 * Функция-менеджер для редьюсеров, нужна для code splitting;
 * @param initialReducers - редьюсеры приложения;
 */
export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManagerI {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemaKeyType[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state, action) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            // ! При добавлении типизации в схему убрать игнор;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
