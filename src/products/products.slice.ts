import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
  title: string;
  price: number;
  id: string;
}

const initialState: Product[] = [
  { title: "Escape From Turkvo", price: 60, id: "eft" },
  { title: "Hunt", price: 70, id: "hunt" },
  { title: "Hull let loose", price: 55, id: "hell" },
];


/* actomatically generates action creators and action types for reducers and state */
const productsSlice = createSlice({  
  name: "products",
  initialState,
  reducers: {
    addProduct: (state: any, action: PayloadAction<Product>) => {
      return [action.payload, ...state];
    },
  },
});

export const { addProduct } = productsSlice.actions;

/* maps the state to the props */
export const getProductsSelector = (state: RootState) => state.products;
  
export default productsSlice.reducer;
