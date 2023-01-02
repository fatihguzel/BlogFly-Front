import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsAction } from "../../../features/Blogs/asyncActions";

const recentPosts = () => {
  const sharedPosts = useSelector((state) => state.blog.sharedBlogs);
  const loginedUser = useSelector((state) => state.auth.user);
  const email = loginedUser.email;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsAction({ email }));
  }, [dispatch]);

  return (
    <>
      {sharedPosts[0] ? (
        <div class="w-full">
          <h3 class="font-medium text-gray-900 text-left px-6">
            Recent activites
          </h3>
          <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
            {sharedPosts.map((post) => (
              <Link
                href={`/blog/${post._id}`}
                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 no-underline"
                key={post.id}
              >
                <img
                  src="63-631830_clipart-bilgisayar-kullanan-kalem-clipart-bilgisayar.png"
                  alt=""
                  class="rounded-full h-6 shadow-md inline-block mr-2"
                />
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div class="relative z-0">
          <input
            type="text"
            id="disabled_standard"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            disabled
          />
          <label
            for="disabled_standard"
            class="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ss
          </label>
        </div>
      )}
    </>
  );
};

export default recentPosts;
