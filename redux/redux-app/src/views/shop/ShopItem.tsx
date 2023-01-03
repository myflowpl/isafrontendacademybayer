import React, { FC } from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Product } from "../../state/shop-cart";

export const ShopItem: FC<{ product: Product }> = ({ product}) => {
    return <Card style={{ width: '25%', display: 'inline-block' }}>
        <Card.Img variant="top" src={product.url} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            {
                false // is product in cart?
                    ? <Button variant="danger">Remove from cart</Button>
                    : <Button variant="primary">Add to cart</Button>
            }
        </Card.Body>
    </Card>
}