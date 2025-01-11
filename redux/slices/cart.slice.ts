import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  carts: CartResponse[];
} = {
  carts: [],
};
export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartResponse>) => {
      state.carts.push(action.payload);
    },
    addcarts: (state, action: PayloadAction<CartResponse[]>) => {
      state.carts = action.payload;
    },
    deleteCart: (state, action: PayloadAction<DUType>) => {
      state.carts = state.carts.filter(
        (item) => item._id !== action.payload.id
      );
    },
    updateCart: (state, action: PayloadAction<CartResponse>) => {
      state.carts.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
      });
    },
  },
});
export const { addCart, addcarts, deleteCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
