export type {
    StateSchema,
    ReduxStoreWithManagerI,
    ThunkConfigI,
} from 'app/providers/StoreProvider/config/StateSchema';
export { createReduxStore, AppDispatch } from './config/store';
export { StoreProvider } from './ui/StoreProvider';
