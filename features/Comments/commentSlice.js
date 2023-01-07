import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { getCommentsAction, writeCommentAction } from "./asyncActions";

const initialState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsAction.fulfilled, (state, { type, payload }) => {
      state.comments = payload.data.comments;
      state.comments.map((comment) => {
        comment.createdAt = new Date(comment.createdAt).toLocaleString();
      });
      state.comments.reverse();
    });

    builder.addCase(
      writeCommentAction.fulfilled,
      (state, { type, payload }) => {
        Swal.fire({
          // Comment Alert
          position: "center",
          icon: "success",
          title: `Yorum Başarıyla Gönderildi`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  },
});

export const {} = commentSlice.actions;

export default commentSlice.reducer;
