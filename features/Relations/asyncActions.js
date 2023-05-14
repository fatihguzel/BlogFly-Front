import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const sendFriendAction = createAsyncThunk(
  "sendFriend/relations",
  async (requestedUsername) => {
    const res = await axios
      .post(
        `${process.env.API_URL}/relationships/sendFriendRequest`,
        {
          requestedUsername: requestedUsername,
        },
        { withCredentials: true }
      )
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Arkadaşlık İsteği Gönderildi",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      });
    return res.data;
  }
);

const getFriendsAction = createAsyncThunk("getFriends/relations", async () => {
  const res = await axios.get(
    `${process.env.API_URL}/relationships/getFriends`,
    {
      withCredentials: true,
    }
  );

  return res.data;
});

const getPendingRequests = createAsyncThunk(
  "getPendingRequests/relations",
  async () => {
    const res = await axios.get(
      `${process.env.API_URL}/relationships/getPendingRequests`,
      {
        withCredentials: true,
      }
    );

    return res.data;
  }
);

const getFriendRequetsAction = createAsyncThunk(
  "getFriendRequests/relations",
  async () => {
    const res = await axios.get(
      `${process.env.API_URL}/relationships/getFriendRequests`,
      {
        withCredentials: true,
      }
    );

    return res.data;
  }
);

const acceptFriendRequestAction = createAsyncThunk(
  "acceptFriendRequest/relations",
  async ({ requestedUsername }) => {
    const res = await axios
      .post(
        `${process.env.API_URL}/relationships/acceptFriendRequest`,
        {
          requestedUsername: requestedUsername,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: `${response.data.message}`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      });

    return res.data;
  }
);
export {
  sendFriendAction,
  getFriendsAction,
  getPendingRequests,
  getFriendRequetsAction,
  acceptFriendRequestAction,
};
