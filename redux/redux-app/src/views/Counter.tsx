import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export const Counter = () => {
    return <>
        <h1>Counter</h1>
        <h2>0</h2>
        <ButtonGroup>
            <Button variant="danger">-</Button>
            <Button variant="secondary">reset</Button>
            <Button variant="success">+</Button>
        </ButtonGroup>
        <ButtonGroup className="mt-3">
            <Button variant="warning">async -</Button>
            <Button variant="primary">async +</Button>
        </ButtonGroup>
    </>
}