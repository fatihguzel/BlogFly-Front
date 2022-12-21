import { createSlice } from "@reduxjs/toolkit";
import { getBlogsAction } from "./asyncActions";

const initialState = {
  sharedBlogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogsAction.fulfilled, (state, { type, payload }) => {
      state.sharedBlogs = payload.data;
    });
  },
});

export const {} = blogSlice.actions;

export default blogSlice.reducer;
