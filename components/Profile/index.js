import React from "react";
import RecentPosts from "./RecentPosts/RecentPosts";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Router, useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const loginedUser = useSelector((state) => state.auth.logined);
  const user = useSelector((state) => state.auth.user);

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
        <div class="container mx-auto my-32">
          <div>
            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
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
                    href=""
                    class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                  >
                    Arkadaş Ekle
                  </a>
                  <a
                    href=""
                    class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                  >
                    Şifremi Değiştir
                  </a>
                  <a
                    href=""
                    class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                  >
                    Destek
                  </a>
                </div>
                <RecentPosts />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {" "}
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
        <div className="bg-gray-50 mt-9  container">
          <br />
          <div className="bg-slate-50  flex items-center w-full justify-center mt-10">
            <div className="max-w-xs">
              <div className="bg-slate-50 mt-10 rounded-lg py-3">
                <div className="photo-wrapper p-2">
                  <img
                    className="w-32 h-32 rounded-full mx-auto "
                    src="78-786420_icono-usuario-joven-transparent-user-png-png-download (1).png"
                    alt={`${user.username}`}
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-center text-3xl text-gray-900 font-medium leading-8">
                    {user.username}
                  </h3>
                  <table className="text-xs my-3">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 text-xl text-gray-500 font-semibold">
                          UserId
                        </td>
                        <td className="px-2 py-2 text-lg">{user._id}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-xl text-gray-500 font-semibold">
                          Email
                        </td>
                        <td className="px-2 py-2 text-lg">{user.email}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="text-center my-3">
                    <Link
                      class="btn btn-outline-dark mr-3 text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                      href="#recentPosts"
                    >
                      View Recent Posts
                    </Link>
                    <Link
                      class="btn btn-outline-dark text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                      href={`/blog/writeBlog`}
                    >
                      Write Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />

          <div id="recentPosts">
            <RecentPosts />
          </div>
        </div>
      )} */}
    </>
  );
};

export default index;
