import React from "react";
import RecentPosts from "./RecentPosts/RecentPosts";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Router, useRouter } from "next/router";
import Swal from "sweetalert2";
import {
  logoutAction,
  removeAccountAction,
} from "../../features/Auth/asyncActions";
import AddFriend from "./addFriend";
import FriendList from "./friendList";
import PendingFriendList from "./pendingFriendList";
import FriendRequests from "./friendRequests";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loginedUser = useSelector((state) => state.auth.logined);
  const user = useSelector((state) => state.auth.user);
  const removeAccountHandler = async (e) => {
    await dispatch(removeAccountAction()).then(router.push("/"));
    await dispatch(logoutAction());
  };
  return (
    <>
      {!loginedUser ? (
        <div className="mb-96">
          <br />
          <div className="mt-96 text-center ">
            <Link
              className="hover:bg-gray-300 text-black px-3 py-2 rounded-md text-3xl font-medium no-underline"
              href="/"
            >
              GO TO THE HOMEPAGE
            </Link>
          </div>
        </div>
      ) : (
        <div class="my-32">
          <div className="container flex flex-col md:flex-row gap-x-12">
            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 ">
              <div class="flex justify-center">
                <img
                  src="78-786420_icono-usuario-joven-transparent-user-png-png-download (1).png"
                  alt=""
                  class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                />
              </div>

              <div class="mt-16">
                <h1 class="font-bold text-center text-3xl text-gray-900">
                  {user.username}
                </h1>
                <p class="text-center text-sm text-gray-400 font-medium">
                  {user.email}
                </p>
                <p class="text-center text-sm text-gray-400 font-medium">
                  {user.role.toUpperCase()}
                </p>
                <p>
                  <span></span>
                </p>
                <div class="my-5 px-6">
                  <Link
                    href={`/blog/writeBlog`}
                    class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white no-underline"
                  >
                    <span class="font-bold no-underline text-xl">Blog Yaz</span>
                  </Link>
                </div>
                <div class="flex justify-between items-center my-5 px-6">
                  <a
                    href="#"
                    class="text-gray-500  rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                  >
                    <AddFriend />
                  </a>
                  <Link
                    href="/auth/resetPassword"
                    class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                  >
                    Şifremi Değiştir
                  </Link>
                  <Link
                    onClick={() => {
                      Swal.fire({
                        title: "Hesabınızı Silmek İstiyor Musunuz?",
                        showCancelButton: true,
                        confirmButtonText: "Evet",
                        cancelButtonText: "Hayır",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          removeAccountHandler();
                        }
                      });
                    }}
                    href="#"
                    class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                  >
                    Hesabı Sil
                  </Link>
                  <a
                    href="#"
                    class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                  >
                    Destek
                  </a>
                  {user.role === "admin" ? (
                    <Link
                      href="/admin"
                      class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                    >
                      Admin Paneli
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
                <RecentPosts />
              </div>
            </div>
            <div className="container w-full mx-auto flex flex-col gap-y-12">
              <FriendList />
              <PendingFriendList />
              <FriendRequests />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
