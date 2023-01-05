import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeBlogsAction } from "../../features/Blogs/asyncActions";

const writeBlog = () => {
  const user = useSelector((state) => state.auth.user);
  const username = user.username;
  const loginedUser = useSelector((state) => state.auth.logined);
  const router = useRouter();
  const dispatch = useDispatch();

  const [blogData, setBlogData] = useState({
    title: "",
    text: "",
  });

  const changeHandler = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const writeBlogHandler = (e) => {
    e.preventDefault();
    const title = blogData.title;
    const text = blogData.text;

    dispatch(writeBlogsAction({ username, title, text }));
  };

  const gotoHome = () => {};

  return (
    <>
      {loginedUser ? (
        <div className="h-screen items-center bg-no-repeat ">
          <div className=" mb-80 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-600 text-gray-100 ">
            <div className="flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  Hadi Konuş!
                </h2>
                <div className="text-gray-400">Bir şeyler yazmayı dene...</div>
              </div>
              <img
                src="https://mambaui.com/assets/svg/doodle.svg"
                alt=""
                className="p-6 h-52 md:h-64"
              />
            </div>
            <form
              onSubmit={writeBlogHandler}
              novalidate=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div>
                <label for="name" className="text-sm">
                  Title
                </label>
                <input
                  name="title"
                  value={blogData.title}
                  onChange={changeHandler}
                  id="name"
                  type="text"
                  placeholder="Enter a valid blog title"
                  className="w-full p-3 rounded bg-gray-200 text-black"
                />
              </div>
              <div>
                <label for="message" className="text-sm">
                  Message
                </label>
                <textarea
                  placeholder="Enter the text you want to share..."
                  name="text"
                  value={blogData.text}
                  onChange={changeHandler}
                  id="message"
                  rows="3"
                  className="w-full p-3 rounded bg-gray-200 text-black"
                ></textarea>
              </div>
              <button
                onClick={writeBlogHandler}
                type="submit"
                className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
              >
                Send Blog
              </button>
            </form>
          </div>
          <div>sadsa</div>
        </div>
      ) : (
        <div
          className="mb-96"
          gotoHome={Promise.resolve(gotoHome()).then(() => {
            router.push("/");
          })}
        >
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
      )}
    </>
  );
};

export default writeBlog;
