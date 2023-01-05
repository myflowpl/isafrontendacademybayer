import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { State } from "../../store";
import { createRemoveFromCartAction } from "../../state/shop-cart";

export const ShopCart = () => {
    const [show, setShow] = useState(false);
    const productsInCart = useSelector((state: State) => state.shopCart);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRemove = (id: number) => {
        dispatch(createRemoveFromCartAction(id))
    }

    const getTotalValue = () => {
        const productPrices = productsInCart.map(product => product.price);
        return productPrices.reduce((total, price) => total + price, 0);
    }

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                🛒
                <Badge className="position-absolute" style={{ top: '34px'}} >
                    {productsInCart.length}
                </Badge>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shop cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <tbody>
                            {
                                productsInCart.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td style={{ width: '50px'}}>
                                            <Button variant="danger" onClick={() => handleRemove(product.id)}>X</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'right'}}>
                                {getTotalValue()}
                            </td>
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