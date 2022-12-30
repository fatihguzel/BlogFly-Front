import { createSlice } from "@reduxjs/toolkit";
import {
  getProfileAction,
  loginAction,
  logoutAction,
  registerAction,
} from "./asyncActions";

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
    });
    /* Profile Action*/
    builder.addCase(getProfileAction.fulfilled, (state, { type, payload }) => {
      state.logined = true;
      state.user = payload.data;
    });
    /* Logout Action*/
    builder.addCase(logoutAction.fulfilled, (state, { type, payload }) => {
      state.logined = false;
    });
    /* Register Action*/
    builder.addCase(registerAction.fulfilled, (state, { type, paylaod }) => {
      state.created = true;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
