import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "../features/Admin/adminSlice";
import authSlice from "../features/Auth/authSlice";
import blogSlice from "../features/Blogs/blogSlice";
import commentSlice from "../features/Comments/commentSlice";
import relationSlice from "../features/Relations/relationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    blog: blogSlice,
    comments: commentSlice,
    admin: adminSlice,
    relations: relationSlice,
  },
});
