import { createSlice } from "@reduxjs/toolkit";
import {
  getProfileAction,
  loginAction,
  logoutAction,
  registerAction,
  resetPasswordAction,
} from "./asyncActions";
const Swal = require("sweetalert2");

const initialState = {
  user: {
    _id: null,
    username: null,
    email: null,
    password: null,
  },
  logined: false,
  created: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Login Action*/
    builder.addCase(loginAction.fulfilled, (state, { type, payload }) => {
      state.user = payload.data;
      state.logined = true;

      Swal.fire({
        // Login alert
        position: "center",
        icon: "success",
        title: `Giriş Başarılı`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
    /* Profile Action*/
    builder.addCase(getProfileAction.fulfilled, (state, { type, payload }) => {
      state.logined = true;
      state.user = payload.data;
    });
    /* Logout Action*/
    builder.addCase(logoutAction.fulfilled, (state, { type, payload }) => {
      state.logined = false;
      console.log(payload);
      Swal.fire({
        // Register Alert
        position: "center",
        icon: "success",
        title: `Çıkış Başarıyla yapıldı`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
    /* Register Action*/
    builder.addCase(registerAction.fulfilled, (state, { type, paylaod }) => {
      state.created = true;

      Swal.fire({
        // Register Alert
        position: "center",
        icon: "success",
        title: `Kayıt Başarıyla Oluşturuldu`,
        showConfirmButton: false,
        timer: 1500,
      });
    });

    /* Reset Password */
    builder.addCase(
      resetPasswordAction.fulfilled,
      (state, { type, payload }) => {
        Swal.fire({
          // ResetPassword Alert
          position: "center",
          icon: "success",
          title: `Şifre Başarıyla Değiştirildi`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
