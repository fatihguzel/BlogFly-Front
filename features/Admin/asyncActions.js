import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const Swal = require("sweetalert2");

const getAllUsersAction = createAsyncThunk("getAllUsers/admin", async () => {
  const res = await axios
    .get(`${process.env.API_URL}/admin/getAllUsers`, {
      withCredentials: true,
    })
    .catch((err) => {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: `${err.response.data.message}`,

        timer: 1500,
      });
    });
  return res.data;
});

const userBlockedAction = createAsyncThunk("userBloc/admin", async (id) => {
  const res = await axios
    .put(`${process.env.API_URL}/admin/userBlocked/${id}`, {
      withCredentials: true,
    })
    .catch((err) => {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: `${err.response.data.message}`,

        timer: 1500,
      });
    });
  return res.data;
});

const userUnBlockedAction = createAsyncThunk(
  "userUnBlocked/admin",
  async (id) => {
    const res = await axios
      .put(`${process.env.API_URL}/admin/userUnBlocked/${id}`, {
        withCredentials: true,
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: `${err.response.data.message}`,

          timer: 1500,
        });
      });
    return res.data;
  }
);

const userDeleteAction = createAsyncThunk("userDelete/admin", async (id) => {
  const res = await axios
    .delete(`${process.env.API_URL}/admin/userDelete/${id}`, {
      withCredentials: true,
    })
    .catch((err) => {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: `${err.response.data.message}`,

        timer: 1500,
      });
    });
  return res.data;
});

export {
  getAllUsersAction,
  userBlockedAction,
  userUnBlockedAction,
  userDeleteAction,
};
