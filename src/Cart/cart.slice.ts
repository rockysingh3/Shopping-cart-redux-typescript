import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../products/products.slice'
import { RootState } from "../store";


interface CartProduct extends Product {
    amount: number;
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartProduct[],
    reducers: {
           addToCart: (state: any, action:  PayloadAction<Product>) => {
               const productIndex = state.findIndex((product: { id: string; }) => product.id === action.payload.id);
               /* if the product is not in the cart */
                if(productIndex !== -1) {
                    state[productIndex].amount += 1;
                }else {
                    state.push({ ...action.payload, amount: 1});
                }
           },
           removeFromCart: (state: any, action: PayloadAction<string>) => {
               const productIndex = state.findIndex((product: { id: string; }) => product.id === action.payload)
               if(state[productIndex].amount > 1) {
                   state[productIndex].amount -= 1;
               } else {
                   /* This returns a new state */
                   return state.filter((product: { id: string; }) => product.id !== action.payload)
               }
           }
    }
})


export const getCartProducts = (state: RootState) => state.cart;

/* taking evevy product in the cart and we are multiply the amount and price for each */
export const getTotalPrice = (state: RootState) => state.cart.reduce((acc, next) => acc += (next.amount + next.price), 0);

/* export the actions for cart reducer */
export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;