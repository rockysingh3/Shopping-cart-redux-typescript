import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../Cart/cart.slice";
import { useAppDispatch } from "../store.hooks";
import { getProductsSelector, Product, removeProduct } from "./products.slice";

interface ProductListProps {

}

const initalProducts = [
    {title: 'Escape From Turkvo', price: 60, id: 'eft'},
    {title: 'Hunt', price: 70, id: 'hunt'},
    {title: 'Hull let loose', price: 55, id: 'hell'}
]   


const ProductsList: React.FC<ProductListProps> = () => {


   const products = useSelector(getProductsSelector);
   const dispatch = useAppDispatch();

   const removeFromStore = (id: string) => {
       dispatch(removeProduct(id))
   }

   const addToCartHandler = (product: Product) => dispatch(addToCart(product));

    return (
        <div>
            <h1>Game List</h1>
            {products.map(product => <div key={product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
                <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
                <button onClick={() => removeFromStore(product.id)}>Remove from the store</button>
            </div>)}
        </div>
    )

}



export default ProductsList;