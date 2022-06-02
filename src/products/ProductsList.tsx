import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "./products.slice";

interface ProductListProps {

}

const initalProducts = [
    {title: 'Escape From Turkvo', price: 60, id: 'eft'},
    {title: 'Hunt', price: 70, id: 'hunt'},
    {title: 'Hull let loose', price: 55, id: 'hell'}
]   


const ProductsList: React.FC<ProductListProps> = () => {


   const products = useSelector(getProductsSelector);

    return (
        <div>
            <h1>Game List</h1>
            {products.map(product => <div key={product.id}>
                <span>{`${product.title} : ${product.price}`}</span>
            </div>)}
        </div>
    )

}



export default ProductsList;