import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const RentalOffice = () => {
    return <>
        <h1>RentalOffice</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th style={{ width: "80px" }} />
                <th style={{ width: "50px" }} />
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The Lion King</td>
                    <td>
                        {
                            false // is element rented
                                ? <Button variant="secondary">Return</Button>
                                : <Button variant="primary">Rent</Button>
                        }
                    </td>
                    <td>
                        <Button variant="danger">
                            X
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
        <Form className="d-flex">
            <Form.Control type="text" name="name" placeholder="Enter name" />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}