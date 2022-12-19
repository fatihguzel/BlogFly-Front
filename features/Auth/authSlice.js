import { createSlice } from "@reduxjs/toolkit";
import { getProfileAction, loginAction, logoutAction } from "./asyncActions";

const initialState = {
  user: {
    _id: null,
    username: null,
    email: null,
    password: null,
  },
  logined: false,
  created: false,
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
      console.log(state.user);
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
    builder.addCase(loginAction, (state, { type, paylaod }) => {
      state.created = true;
      console.log(paylaod.data);
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
