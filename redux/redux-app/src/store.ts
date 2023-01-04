import { createStore, combineReducers } from 'redux';
import { counter } from './state/counter';
import { rentalOffice, VHS } from './state/rental-office';

export type State = {
    counter: number,
    rentalOffice: VHS[]
}

const reducers = combineReducers({
    counter,
    rentalOffice
});

// @ts-ignore
export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());