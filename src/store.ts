import { configureStore } from "@reduxjs/toolkit";
import products from './products/products.slice'


const store = configureStore({
    reducer: {
        products
    }
})  


export type RootState = ReturnType<typeof store.getState>


export default store;