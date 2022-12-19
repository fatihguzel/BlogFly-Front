import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginAction = createAsyncThunk(
  "loginAction/auth",
  async ({ email, password }) => {
    const res = await axios.post(
      `${process.env.API_URL}/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    return res.data;
  }
);

const registerAction = createAsyncThunk(
  "registerAction/auth",
  async ({ username, email, password }) => {
    const res = await axios.post(
      `${process.env.API_URL}/auth/register`,
      {
        username,
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  }
);

const getProfileAction = createAsyncThunk("getProfileAction/auth", async () => {
  const res = await axios.get(`${process.env.API_URL}/auth/profile`, {
    withCredentials: true,
  });
  return res.data;
});

const logoutAction = createAsyncThunk("logoutAction/auth", async () => {
  const res = await axios.get(`${process.env.API_URL}/auth/logout`, {
    withCredentials: true,
  });
  return res.data;
});
export { loginAction, registerAction, getProfileAction, logoutAction };
