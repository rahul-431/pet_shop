import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  wishlist: WishlistResponse[];
} = {
  wishlist: [],
};
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishList: (state, action: PayloadAction<WishlistResponse>) => {
      state.wishlist.push(action.payload);
    },
    addWishlists: (state, action: PayloadAction<WishlistResponse[]>) => {
      state.wishlist = action.payload;
    },
    deleteWishList: (state, action: PayloadAction<DUType>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload.id
      );
    },
    updateWishList: (state, action: PayloadAction<WishlistResponse>) => {
      state.wishlist.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
      });
    },
  },
});
export const { addWishList, addWishlists, deleteWishList, updateWishList } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
