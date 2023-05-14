import React from "react";
import { useDispatch } from "react-redux";
import {
  acceptFriendRequestAction,
  getFriendRequetsAction,
  getFriendsAction,
  getPendingRequests,
} from "../../../../features/Relations/asyncActions";

const AcceptFriend = ({ pendingRequests }) => {
  const dispatch = useDispatch();

  const acceptHandler = async ({ requestedUsername }) => {
    await dispatch(acceptFriendRequestAction({ requestedUsername }));
    await dispatch(getFriendsAction);
    await dispatch(getFriendRequetsAction);
    await dispatch(getPendingRequests);
  };

  return (
    <>
      {pendingRequests.map((request) => (
        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {request.username}
          </td>
          <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
            {request.email}
          </td>
          <button
            type="button"
            onClick={({ requestedUsername }) => {
              requestedUsername = request.username;
              acceptHandler({ requestedUsername });
            }}
            class="py-4 px-6 uppercase text-sm hover:text-green-400 hover:transition-all hover:duration-500 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Onayla
          </button>
        </tr>
      ))}
    </>
  );
};

export default AcceptFriend;
