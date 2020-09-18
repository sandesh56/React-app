import { createStore } from 'redux';
import { Reducer, initialState } from './redux';

export const configStore = () => {
    const store = createStore(
        Reducer,
        initialState,
    );
    return store;
}