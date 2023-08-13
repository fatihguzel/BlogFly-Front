import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendsAction } from "../../../features/Relations/asyncActions";
import { Icon } from "@iconify/react";
import Link from "next/link";

const FriendList = () => {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state?.relations?.friends);
  const rooms = useSelector((state) => state?.relations?.rooms);

  useEffect(() => {
    dispatch(getFriendsAction());
  }, []);
  return (
    <div>
      <div class="flex flex-col">
        <div className="mb-4 uppercase border-b border-gray-600 text-2xl text-gray-600">
          Friends
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
                      Status
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {friends.length > 0 &&
                    friends.map((friend, index) => (
                      <tr
                        key={index}
                        class="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {friend.username}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          {friend.email}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {friend.isLogined === true ? (
                            <div className="flex flex-row gap-x-2 items-center">
                              <Icon icon="mdi:account-online" color="green" />
                              Online
                            </div>
                          ) : (
                            <div className="flex flex-row gap-x-2 items-center">
                              <Icon icon="mdi:account-online" color="red" />
                              Offline
                            </div>
                          )}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          <Link href={`/chat/${rooms[index].roomName}`}>
                            Send Message
                          </Link>
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

export default FriendList;
