import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
    const res = await axios.post(
      `${process.env.API_URL}/blog/writeblog`,
      {
        username,
        title,
        text,
      },
      { withCredentials: true }
    );
    console.log(res.data);
    return res.data;
  }
);

const getAllBlogsAction = createAsyncThunk("getAllBlogs/blog", async () => {
  const res = await axios.get(`${process.env.API_URL}/blog/getAllBlogs`, {
    withCredentials: true,
  });

  return res.data;
});

export { getBlogsAction, writeBlogsAction, getAllBlogsAction };
