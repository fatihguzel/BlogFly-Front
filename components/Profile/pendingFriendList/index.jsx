import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPendingRequests } from "../../../features/Relations/asyncActions";
import AcceptFriend from "../friendRequests/acceptFriend";

const PendingFriendList = () => {
  const pendingRequests = useSelector(
    (state) => state.relations.pendingRequests
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPendingRequests());
  }, [dispatch]);
  return (
    <div>
      <div class="flex flex-col">
        <div className="mb-4 uppercase border-b border-gray-600 text-2xl text-gray-600">
          Pending Requests
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
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {pendingRequests.map((request) => (
                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {request.username}
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {request.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingFriendList;
