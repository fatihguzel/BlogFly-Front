import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const Swal = require("sweetalert2");

const loginAction = createAsyncThunk(
  "loginAction/auth",
  async ({ email, password }) => {
    const res = await axios
      .post(
        `${process.env.API_URL}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
    console.log(res);

    return res.data;
  }
);

const registerAction = createAsyncThunk(
  "registerAction/auth",
  async ({ username, email, password }) => {
    const res = await axios
      .post(
        `${process.env.API_URL}/auth/register`,
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .catch((err) => {
        Swal.fire({
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

const getProfileAction = createAsyncThunk("getProfileAction/auth", async () => {
  const res = await axios.get(`${process.env.API_URL}/auth/profile`, {
    withCredentials: true,
  });
  return res.data;
});

const resetPasswordAction = createAsyncThunk(
  "resetPassword/Auth",
  async ({ email, oldPassword, newPassword, againPassword }) => {
    const res = await axios
      .put(`${process.env.API_URL}/auth/resetPassword`, {
        email,
        oldPassword,
        newPassword,
        againPassword,
      })
      .catch((err) => {
        Swal.fire({
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

const removeAccountAction = createAsyncThunk(
  "removeAccountAction/auth",
  async () => {
    const res = await axios.delete(
      `${process.env.API_URL}/auth/removeAccount`,
      { withCredentials: true }
    );
    return res.data;
  }
);

const logoutAction = createAsyncThunk("logoutAction/auth", async () => {
  const res = await axios.get(`${process.env.API_URL}/auth/logout`, {
    withCredentials: true,
  });
  return res.data;
});

export {
  loginAction,
  registerAction,
  getProfileAction,
  resetPasswordAction,
  removeAccountAction,
  logoutAction,
};
