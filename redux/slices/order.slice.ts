import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  order: OrderResponse[];
} = {
  order: [],
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<OrderResponse>) => {
      state.order.push(action.payload);
    },
    addOrders: (state, action: PayloadAction<OrderResponse[]>) => {
      state.order = action.payload;
    },
    deleteOrder: (state, action: PayloadAction<DUType>) => {
      state.order = state.order.filter(
        (item) => item._id !== action.payload.id
      );
    },
    updateOrder: (state, action: PayloadAction<OrderResponse>) => {
      state.order.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
      });
    },
  },
});
export const { addOrder, addOrders, deleteOrder, updateOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
