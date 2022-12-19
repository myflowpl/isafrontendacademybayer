import React from 'react';
import styled from 'styled-components';

const Score = styled.span`
    color: ${props => props.isRed ? 'red' : 'inherit'};
`

export class GameClass extends React.Component {
    state = {
        points: 0
    }

    increase = () => {
        this.setState({ points: this.state.points + 5 })
    }

    decrease = () => {
        this.setState({ points: this.state.points - 5 })
    }

    componentDidUpdate() {
        if (this.state.points === 50) {
            alert(`Congratulations! You won the game ${this.props.name}!`);
            this.setState({ points: 0 })
        }
    }

    render() {
        return (
            <>
                <h3>Welcome to the game {this.props.name}!</h3>
                <h4>Your number of points is: 
                    <Score isRed={this.state.points < 0}>{this.state.points}</Score>.
                </h4>
                <div>
                    <button onClick={this.increase}>+</button>
                    <button onClick={this.decrease}>-</button>
                </div>
            </>
        )
    }
}