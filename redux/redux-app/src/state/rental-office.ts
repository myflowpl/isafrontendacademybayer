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
];

// ACTIONS

// REDUCER
export const rentalOffice = () => {
}

// ACTION CREATORS
