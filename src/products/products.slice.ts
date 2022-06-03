import { bindActionCreators, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import validateProduct from "../fake.api";
import { RootState } from "../store";

export interface Product {
  title: string;
  price: number;
  id: string;
}


export enum ValidationState {
  Fulfilled,
  Pending,
  Rejected 
}


interface ProductSliceState {
  products: Product[],
  validationState?: ValidationState,
  errorMessage?: string
}


/* this is how you would use Async Thunk tryihng to make async calls */
export const addProductAsync = createAsyncThunk('products/addNewProduct',async (initalProduct:Product) => {
  const product = await validateProduct(initalProduct);
  return product;
})

const initialProducts: Product[] = [
  { title: "Escape From Turkvo", price: 60, id: "eft" },
  { title: "Hunt", price: 70, id: "hunt" },
  { title: "Hull let loose", price: 55, id: "hell" },
];

const initialState: ProductSliceState = {
  products: initialProducts,
  validationState: undefined,
  errorMessage: undefined
}


/* actomatically generates action creators and action types for reducers and state */
const productsSlice = createSlice({  
  name: "products",
  initialState,
  reducers: {
    addProduct: (state: any, action: PayloadAction<Product>) => {
      // return [action.payload, ...state.products];
      state.products.push(action.payload);
    },
    removeProduct: (state: any, action: PayloadAction<string>) => ({
      ...state,
      products: state.products.filter((product: { id: string; }) => product.id !== action.payload)
    }),
    extraReducers: builder => {
      builder.addCase(addProductAsync.fulfilled, (state: any, action: { payload: any; }) => ({
        ...state,
        ValidationState: ValidationState.Fulfilled,
        errorMessage: undefined,
        products: [...state.products, action.payload]
      }))
      builder.addCase(addProductAsync.rejected, (state, action) => {
        

      })
      builder.addCase(addProductAsync.pending, (state, action) => {

      })
    }
  },
});


/* exporting the action that the reducer created */
export const { addProduct, removeProduct } = productsSlice.actions;


/* maps the state to the props */
export const getProductsSelector = (state: RootState) => state.products;


/* exporting the reducer */
export default productsSlice.reducer;
