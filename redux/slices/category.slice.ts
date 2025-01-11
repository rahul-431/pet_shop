import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  category: CategoryResponse[];
} = {
  category: [],
};
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<CategoryResponse>) => {
      state.category.push(action.payload);
    },
    addcategory: (state, action: PayloadAction<CategoryResponse[]>) => {
      state.category = action.payload;
    },
    deleteCategory: (state, action: PayloadAction<DUType>) => {
      state.category = state.category.filter(
        (item) => item._id !== action.payload.id
      );
    },
    updateCategory: (state, action: PayloadAction<CategoryResponse>) => {
      state.category.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
      });
    },
  },
});
export const { addCategory, addcategory, deleteCategory, updateCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
