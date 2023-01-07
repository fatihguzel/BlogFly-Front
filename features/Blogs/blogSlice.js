import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import {
  getAllBlogsAction,
  getBlogsAction,
  likeBlogAction,
  undoLikeBlogAction,
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

    builder.addCase(writeBlogsAction.fulfilled, (state, { type, payload }) => {
      Swal.fire({
        // Write Blog Alert
        position: "center",
        icon: "success",
        title: `Blog Başarıyla Oluşturuldu`,
        showConfirmButton: false,
        timer: 1500,
      });
    });

    builder.addCase(getAllBlogsAction.fulfilled, (state, { type, payload }) => {
      state.allBlogs = payload.data;
      state.allBlogs.reverse();
      state.allBlogs.map(
        (blog) => (blog.createdAt = new Date(blog.createdAt).toLocaleString())
      );
    });

    builder.addCase(likeBlogAction.fulfilled, (state, { type, payload }) => {
      console.log("first");
    });

    builder.addCase(
      undoLikeBlogAction.fulfilled,
      (state, { type, payload }) => {
        console.log("object");
      }
    );
  },
});

export const {} = blogSlice.actions;

export default blogSlice.reducer;
