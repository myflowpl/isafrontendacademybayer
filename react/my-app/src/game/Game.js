import {useState} from 'react';
import styled from 'styled-components';

const Score = styled.span`
    color: ${props => props.isRed ? 'red' : 'inherit'};
`

export const Game = ({ name }) => {
    const [points, setPoints] = useState(0);

    const increase = () => {
        setPoints(points + 5);
    }

    const decrease = () => {
        setPoints(points - 5);
    }

    return (
        <>
            <h3>Welcome to the game {name}!</h3>
            <h4>Your number of points is: <Score isRed={points < 0}>{points}</Score>.</h4>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </>
    )
}