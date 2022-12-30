import { createSlice } from "@reduxjs/toolkit";
import {
  getAllBlogsAction,
  getBlogsAction,
  writeBlogsAction,
} from "./asyncActions";

const initialState = {
  sharedBlogs: [],
  allBlogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogsAction.fulfilled, (state, { type, payload }) => {
      state.sharedBlogs = payload.data;
    });

    builder.addCase(
      writeBlogsAction.fulfilled,
      (state, { type, payload }) => {}
    );

    builder.addCase(getAllBlogsAction.fulfilled, (state, { type, payload }) => {
      state.allBlogs = payload.data;
    });
  },
});

export const {} = blogSlice.actions;

export default blogSlice.reducer;
