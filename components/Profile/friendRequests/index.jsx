import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFriendRequetsAction,
  getPendingRequests,
} from "../../../features/Relations/asyncActions";
import AcceptFriend from "./acceptFriend";

const FriendRequets = () => {
  const friendRequests = useSelector((state) => state.relations.friendRequests);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriendRequetsAction());
  }, [dispatch]);
  return (
    <div>
      <div class="flex flex-col">
        <div className="mb-4 uppercase border-b border-gray-600 text-2xl text-gray-600">
          Friend Requests
        </div>
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden ">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      USERNAME
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      EMAIL
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      {``}
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <AcceptFriend pendingRequests={friendRequests} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequets;
