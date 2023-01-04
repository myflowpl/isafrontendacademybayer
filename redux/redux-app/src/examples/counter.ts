import { createStore } from 'redux';

type Action = {
    type: 'INCREMENT' | 'DECREMENT' | 'RESET'
}

function reducer(state: number = 0, action: Action): number {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        default:
            return state
    }
}

const store = createStore(reducer);

// @ts-ignore
window.store = store;