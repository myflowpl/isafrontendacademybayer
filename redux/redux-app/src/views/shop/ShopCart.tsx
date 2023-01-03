import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";

export const ShopCart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="light" onClick={handleShow}>
                🛒
                <Badge className="position-absolute" style={{ top: '34px'}} >
                    0
                </Badge>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shop cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>Product 1</td>
                                <td>100</td>
                                <td style={{ width: '50px'}}>
                                    <Button variant="danger">X</Button>
                                </td>
                            </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'right'}}>0</td>
                        </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Buy
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}