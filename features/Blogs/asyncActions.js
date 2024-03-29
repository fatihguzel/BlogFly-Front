import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const getBlogsAction = createAsyncThunk("getBlogs/blogs", async ({ email }) => {
  const res = await axios.post(
    `${process.env.API_URL}/blog/getUserBlogs`,
    { email },
    {
      withCredentials: true,
    }
  );
  return res.data;
});

const writeBlogsAction = createAsyncThunk(
  "writeBlogs/blog",
  async ({ username, title, text }) => {
    console.log(username, title, text);
    const res = await axios
      .post(
        `${process.env.API_URL}/blog/writeblog`,
        {
          username,
          title,
          text,
        },
        { withCredentials: true }
      )
      .catch((err) => {
        Swal.fire({
          // Write Blog Alert
          position: "center",
          icon: "warning",
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });

    return res.data;
  }
);

const deleteBlogsAction = createAsyncThunk(
  "blogs/deleteBlogs",
  async ({ _id }) => {
    console.log(_id);
    const res = await axios
      .delete(`${process.env.API_URL}/blog/removeUserBlog/${_id}`, {
        withCredentials: true,
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Blog Başarıyla Silindi",
        });
      })
      .err((err) => {
        Swal.fire({
          // Delete Blog Alert
          position: "center",
          icon: "warning",
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });

    return res.data;
  }
);

const getAllBlogsAction = createAsyncThunk("getAllBlogs/blog", async () => {
  const res = await axios.get(`${process.env.API_URL}/blog/getAllBlogs`, {
    withCredentials: true,
  });

  return res.data;
});

const likeBlogAction = createAsyncThunk("likeBlog/blog", async ({ blogId }) => {
  const res = await axios
    .post(
      `${process.env.API_URL}/blog/like`,
      {
        blogId,
      },
      { withCredentials: true }
    )
    .catch((err) => {
      Swal.fire({
        // Write Blog Alert
        position: "center",
        icon: "warning",
        title: `${err.response.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  return res.data;
});

const undoLikeBlogAction = createAsyncThunk(
  "undoLikeBlog/blog",
  async ({ blogId }) => {
    const res = await axios
      .post(
        `${process.env.API_URL}/blog/undoLike`,
        {
          blogId,
        },
        { withCredentials: true }
      )
      .catch((err) => {
        Swal.fire({
          // Write Blog Alert
          position: "center",
          icon: "warning",
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
    return res.data;
  }
);

export {
  getBlogsAction,
  writeBlogsAction,
  deleteBlogsAction,
  getAllBlogsAction,
  likeBlogAction,
  undoLikeBlogAction,
};
