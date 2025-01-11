import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  user: UserResponse;
  accessToken: string;
} = {
  user: {
    _id: "",
    address: {
      city: "",
      country: "",
      postalCode: "",
      state: "",
      street: "",
    },
    cart: [],
    wishlist: [],
    email: "",
    isAdmin: false,
    name: "",
    onboarded: false,
    phone: "",
  },
  accessToken: "",
};
export const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload;
    },
    addToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    removeUser: (state) => {
      state.accessToken = "";
      state.user = {
        _id: "",
        address: {
          city: "",
          country: "",
          postalCode: "",
          state: "",
          street: "",
        },
        cart: [],
        wishlist: [],
        email: "",
        isAdmin: false,
        name: "",
        onboarded: false,
        phone: "",
      };
    },
  },
});
export const { addUser, addToken, removeUser } = authSlice.actions;
export default authSlice.reducer;
