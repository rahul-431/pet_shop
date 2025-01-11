import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  products: ProductResponse[];
} = {
  products: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductResponse>) => {
      state.products.push(action.payload);
    },
    addProducts: (state, action: PayloadAction<ProductResponse[]>) => {
      state.products = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<DUType>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload.id
      );
    },
    updateProduct: (state, action: PayloadAction<ProductResponse>) => {
      state.products.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
      });
    },
  },
});
export const { addProduct, addProducts, deleteProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
