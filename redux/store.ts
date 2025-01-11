import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product.slice";
import cartSlice from "./slices/cart.slice";
import categorySlice from "./slices/category.slice";
import orderSlice from "./slices/order.slice";
import blogSlice from "./slices/blog.slice";
import wishlistSlice from "./slices/wishlist.slice";
import authSlice from "./slices/auth.slice";
const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    category: categorySlice,
    orders: orderSlice,
    blogs: blogSlice,
    wishlist: wishlistSlice,
    authUser: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
