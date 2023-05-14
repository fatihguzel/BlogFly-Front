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
        <div class="w-full mb-52">
          <h3 class="font-medium text-gray-900 text-left px-6">
            Recent activites
          </h3>
          <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
            {sharedPosts.map((post) => (
              <Link
                href={`/blog/${post._id}`}
                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 no-underline"
                key={post._id}
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
        <div className="h-32 ">
          <h3 class="font-medium text-gray-900 text-left px-6">
            Recent activites
            <div className="mt-8 text-center font-bold italic">
              Hey! Neden Bir Şeyler Yazmayı Denemiyorsun?
            </div>
          </h3>
        </div>
      )}
    </>
  );
};

export default recentPosts;
