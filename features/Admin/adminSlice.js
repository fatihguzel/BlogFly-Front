import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsersAction,
  userBlockedAction,
  userDeleteAction,
  userUnBlockedAction,
} from "./asyncActions";
const Swal = require("sweetalert2");

const initialState = {
  allUsers: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAction.fulfilled, (state, { type, payload }) => {
      state.allUsers = payload.data;
    });

    builder.addCase(userBlockedAction.fulfilled, (state, { type, payload }) => {
      console.log(payload);
      Swal.fire({
        // User Block alert
        position: "bottom-right",
        icon: "success",
        title: `${payload.data.username} adlı kullanıcı bloklandı`,
        showConfirmButton: false,
        timer: 1500,
      });
    });

    builder.addCase(
      userUnBlockedAction.fulfilled,
      (state, { type, payload }) => {
        console.log(payload);
        Swal.fire({
          // User Block alert
          position: "bottom-right",
          icon: "success",
          title: `${payload.data.username} adlı kullanıcının bloğu kaldırıldı`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );

    builder.addCase(userDeleteAction.fulfilled, (state, { type, payload }) => {
      console.log(payload);
      Swal.fire({
        // User Block alert
        position: "bottom-right",
        icon: "success",
        title: `${payload.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  },
});

export const {} = adminSlice.actions;

export default adminSlice.reducer;
