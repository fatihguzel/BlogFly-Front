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
      {" "}
      {!loginedUser ? (
        <></>
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
      )}
    </>
  );
};

export default index;
