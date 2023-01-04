import { createStore } from 'redux';

const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';
const WITHDRAW_ALL = 'WITHDRAW_ALL';
const BALANCE = 'BALANCE';

type Action = {
    type: 'DEPOSIT' | 'WITHDRAW' | 'WITHDRAW_ALL' | 'BALANCE',
    payload?: number
}

function reducer(state: number = 1000, action: Action): number {
    switch(action.type) {
        case DEPOSIT:
            if (!action.payload) {
                return state;
            }

            if (action.payload > 1000) {
                console.warn('You can not deposit more than 1000')
                return state;
            }

            return state + action.payload
        case WITHDRAW:
            if (!action.payload) {
                return state;
            }

            if (action.payload > state) {
                console.error('You do not have so much money!');
                return state;
            }

            return state - action.payload
        case WITHDRAW_ALL:
            console.log('You have withdrawn' + state);
            return 0
        case BALANCE:
            console.log('You have ' + state);
            return state
        default:
            return state;
    }
}

const createDepositAction = (value: number): Action => ({ type: DEPOSIT, payload: value });
const createWithdrawAction = (value: number): Action => ({ type: WITHDRAW, payload: value });
const createWithdrawAllAction = (): Action => ({ type: WITHDRAW_ALL });
const createBalanceAction = (): Action => ({ type: BALANCE });

// @ts-ignore
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// @ts-ignore
window.store = store;
// @ts-ignore
window.createDepositAction = createDepositAction;
// @ts-ignore
window.createWithdrawAction = createWithdrawAction;