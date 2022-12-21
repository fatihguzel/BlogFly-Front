import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getBlogsAction = createAsyncThunk("getBlogs/blogs", async () => {
  const res = await axios.get(`${process.env.API_URL}/blog/getBlogs`, {
    withCredentials: true,
  });
  return res.data;
});

export { getBlogsAction };
