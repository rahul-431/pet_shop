import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  blogs: BlogResponse[];
} = {
  blogs: [],
};
export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<BlogResponse>) => {
      state.blogs.push(action.payload);
    },
    addblogs: (state, action: PayloadAction<BlogResponse[]>) => {
      state.blogs = action.payload;
    },
    deleteBlog: (state, action: PayloadAction<DUType>) => {
      state.blogs = state.blogs.filter(
        (item) => item._id !== action.payload.id
      );
    },
    updateBlog: (state, action: PayloadAction<BlogResponse>) => {
      state.blogs.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
      });
    },
  },
});
export const { addBlog, addblogs, deleteBlog, updateBlog } = blogSlice.actions;
export default blogSlice.reducer;
