import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const getCommentsAction = createAsyncThunk(
  "getComments/comments",
  async ({ blogId }) => {
    const res = await axios.post(
      `${process.env.API_URL}/comment/getComment`,
      {
        blogId,
      },
      { withCredentials: true }
    );
    return res.data;
  }
);

const writeCommentAction = createAsyncThunk(
  "writeComment/comments",
  async ({ blogId, username, text }) => {
    const res = await axios
      .post(
        `${process.env.API_URL}/comment/writeComment`,
        {
          blogId,
          username,
          text,
        },
        { withCredentials: true }
      )
      .catch((err) => {
        Swal.fire({
          // Comment Alert
          position: "center",
          icon: "error",
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });

    return res.data;
  }
);

export { getCommentsAction, writeCommentAction };
