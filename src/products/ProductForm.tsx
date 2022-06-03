import React, { useState } from "react";
import { useAppDispatch } from "../store.hooks";
import { addProduct, Product } from "./products.slice";




const ProductForm: React.FC = () => {

    /* importing dispatch from store.hooks 
        this method dispatchs info to the reducer */
    const dispatch = useAppDispatch();

    /* Product type is difined in the product.slice file */
    const [{ title, price, id }, setProduct] = useState<Product>({
        id: '',
        title: '',
        price: 0
    })

    /* Read the data from the input filed - this method should always return a new state */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setProduct(prev => {
        /* grabing the value from the field and storing into prev */
        /* you could destructure the event =  {target: {name, value}}*/
        /* (prev as any)[name] = prev[name] */
        (prev as any)[event.target.name] = event.target.value;
        const newValue = { ...prev };
        return newValue;
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addProduct({ title, price, id }))
    }


    return (
        <div>
            <h2>Add Game To The Store</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Game" name="title" value={title} onChange={handleChange} />
                <input type="text" placeholder="Price" name="price" value={price} onChange={handleChange} />
                <input type='text' placeholder="id" name="id" value={id} onChange={handleChange} />
                <button type="submit">Add price</button>
            </form>
        </div>
    )
}


export default ProductForm;