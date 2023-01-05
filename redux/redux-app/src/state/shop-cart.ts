export type Product = {
    id: number,
    name: string,
    url: string,
    price: number
}

// ACTIONS
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

type AddToCartAction = { type: typeof ADD_TO_CART, payload: Product };
type RemoveFromCartAction = { type: typeof REMOVE_FROM_CART, payload: number }
type Action = AddToCartAction | RemoveFromCartAction;

// REDUCER
export const shopCart = (state: Product[] = [], action: Action): Product[] => {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.payload);
        default:
            return state;
    }
}

// ACTION CREATORS
export const createAddToCartAction = (product: Product) => ({ type: ADD_TO_CART, payload: product });
export const createRemoveFromCartAction = (id: number) => ({ type: REMOVE_FROM_CART, payload: id });