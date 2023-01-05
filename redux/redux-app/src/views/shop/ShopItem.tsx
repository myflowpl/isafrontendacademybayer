import React, { FC } from "react"
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Product, createAddToCartAction, createRemoveFromCartAction } from "../../state/shop-cart";
import { State } from '../../store';

export const ShopItem: FC<{ product: Product }> = ({ product }) => {
    const dispatch = useDispatch();
    const productsInCart = useSelector((state: State) => state.shopCart);

    const handleAdd = () => {
        dispatch(createAddToCartAction(product))
    }

    const handleRemove = () => {
        dispatch(createRemoveFromCartAction(product.id))
    }

    const isProductInCart = () => {
        const productInCartIds = productsInCart.map(productInCart => productInCart.id);
        return productInCartIds.includes(product.id)
    }

    return <Card style={{ width: '25%', display: 'inline-block' }}>
        <Card.Img variant="top" src={product.url} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            {
                isProductInCart()
                    ? <Button variant="danger" onClick={handleRemove}>Remove from cart</Button>
                    : <Button variant="primary" onClick={handleAdd}>Add to cart</Button>
            }
        </Card.Body>
    </Card>
}