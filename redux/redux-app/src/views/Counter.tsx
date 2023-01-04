import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { createIncrementAction, createDecrementAction, createResetAction } from "../state/counter";

export const Counter = () => {
    const value = useSelector(state => state);
    const dispatch = useDispatch();

    const handleIncrementClick = () => {
        dispatch(createIncrementAction())
    }

    const handleDecrementClick = () => {
        dispatch(createDecrementAction())
    }

    const handleResetClick = () => {
        dispatch(createResetAction())
    }

    return <>
        <h1>Counter</h1>
        <h2>{value}</h2>
        <ButtonGroup>
            <Button variant="danger" onClick={handleDecrementClick}>-</Button>
            <Button variant="secondary" onClick={handleResetClick}>reset</Button>
            <Button variant="success" onClick={handleIncrementClick}>+</Button>
        </ButtonGroup>
        <ButtonGroup className="mt-3">
            <Button variant="warning">async -</Button>
            <Button variant="primary">async +</Button>
        </ButtonGroup>
    </>
}