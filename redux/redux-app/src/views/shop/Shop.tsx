import React from "react";
import {Product} from "../../state/shop-cart";
import {ShopItem} from "./ShopItem";

const products: Product[] = new Array(20).fill(0).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 1000),
    url: Math.random() > 0.5
        ? 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'
        : 'https://cdn-icons-png.flaticon.com/512/877/877951.png'
}))

export const Shop = () => {
    return <>
        <h1>Shop</h1>
        <div>
            {
                products.map(product => {
                    return <ShopItem key={product.id} product={product} />
                })
            }
        </div>
    </>
}