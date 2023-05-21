import { createSlice } from "@reduxjs/toolkit";
import {
  acceptFriendRequestAction,
  getFriendRequetsAction,
  getFriendsAction,
  getPendingRequests,
  sendFriendAction,
} from "./asyncActions";

const initialState = {
  friends: [],
  pendingRequests: [],
  friendRequests: [],
};

const relationSlice = createSlice({
  name: "relations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendFriendAction.fulfilled, (state, { type, payload }) => {
      console.log("send friend action");
    });

    builder.addCase(getFriendsAction.fulfilled, (state, { type, payload }) => {
      state.friends = payload.data;
    });

    builder.addCase(
      getPendingRequests.fulfilled,
      (state, { type, payload }) => {
        state.pendingRequests = payload.data;
      }
    );

    builder.addCase(
      acceptFriendRequestAction.fulfilled,
      (state, { type, payload }) => {}
    );

    builder.addCase(
      getFriendRequetsAction.fulfilled,
      (state, { type, payload }) => {
        state.friendRequests = payload.data;
      }
    );
  },
});

export const {} = relationSlice.actions;

export default relationSlice.reducer;
