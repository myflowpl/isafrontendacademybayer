// INITIAL STATE
export type VHS = {
    id: number,
    name: string,
    isRented: boolean
}

const initialState: VHS[] = [
    { id: 1, name: 'The Lion King', isRented: true },
    { id: 2, name: 'Robocop', isRented: false },
    { id: 3, name: 'Kobra', isRented: false },
    { id: 4, name: 'Pocahontas', isRented: false },
];

// ACTIONS
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const RENT = 'RENT';
const RETURN = 'RETURN';

type AddAction = { type: typeof ADD, payload: string }
type RemoveAction = { type: typeof REMOVE, payload: number }
type RentAction = { type: typeof RENT, payload: number }
type ReturnAction = { type: typeof RETURN, payload: number }

type Action = AddAction | RemoveAction | RentAction | ReturnAction;

// REDUCER
export const rentalOffice = (state: VHS[] = initialState, action: Action): VHS[] => {
    switch(action.type) {
        case ADD:
            const newVHS = {
                name: action.payload,
                id: state.length + 1,
                isRented: false
            }
            return [...state, newVHS];

        case REMOVE:
            return state.filter(element => element.id !== action.payload);

        case RENT:
            return state.map(element => {
                if (element.id === action.payload) element.isRented = true
                return element
            });

        case RETURN:
            return state.map(element => {
                if (element.id === action.payload) element.isRented = false
                return element
            });

        default:
            return state;
    }
}

// ACTION CREATORS
export const crateAddAction = (name: string): AddAction => ({ type: ADD, payload: name });
export const crateRemoveAction = (id: number): RemoveAction => ({ type: REMOVE, payload: id });
export const crateRentAction = (id: number): RentAction => ({ type: RENT, payload: id });
export const crateReturnAction = (id: number): ReturnAction => ({ type: RETURN, payload: id });