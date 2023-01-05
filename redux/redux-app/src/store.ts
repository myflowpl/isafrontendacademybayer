import { createStore, combineReducers } from 'redux';
import { counter } from './state/counter';
import { rentalOffice, VHS } from './state/rental-office';
import { shopCart, Product } from './state/shop-cart';

export type State = {
    counter: number,
    rentalOffice: VHS[],
    shopCart: Product[]
}

const reducers = combineReducers({
    counter,
    rentalOffice,
    shopCart
});

// @ts-ignore
export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());