import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/authSlice";
import blogSlice from "../features/Blogs/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    blog: blogSlice,
  },
});
