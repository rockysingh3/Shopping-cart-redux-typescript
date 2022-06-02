import React from "react";


interface ProductFormProps {

}

const ProductForm: React.FC<ProductFormProps> = () => {
    return (
        <div>
            <h2>Add Game To The Store</h2>
            <form>
                <input type="text" placeholder="Game" name="title"/>
                <input type="text" placeholder="Price" name="price"/>
                <input type='text' placeholder="id" name="id"/>
                <button>Add price</button>
            </form>
        </div>
    )
}


export default ProductForm;