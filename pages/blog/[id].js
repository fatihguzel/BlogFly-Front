import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentsAction,
  writeCommentAction,
} from "../../features/Comments/asyncActions";
import { useRouter } from "next/router";

const index = ({ id, blog }) => {
  const comments = useSelector((state) => state.comments.comments);
  console.log(comments);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [writeCommentData, setWriteCommentData] = useState("");

  const changeHandler = (e) => {
    setWriteCommentData(e.target.value);
  };

  const writeCommentHandler = async (e) => {
    e.preventDefault();
    const blogId = blog._id;
    const username = user.username;
    const text = writeCommentData;
    await dispatch(writeCommentAction({ blogId, username, text }));
    await dispatch(getCommentsAction({ blogId }));
  };

  useEffect(() => {
    const blogId = blog._id;
    dispatch(getCommentsAction({ blogId }));
  }, []);

  return (
    <div className="w-full h-full container mt-16 mb-96 bg-white rounded-none">
      <ul
        style={{
          boxShadow: " 0px 11px 23px 5px rgba(0, 0, 0, 0.34)",
        }}
      >
        {" "}
        <li class={`list-group-item clearfix ${styles["list-group-item"]}`}>
          <img
            class="img-responsive img-rounded"
            src="/78-786420_icono-usuario-joven-transparent-user-png-png-download (1).png"
            alt=""
            style={{
              float: "left",
              marginRight: "15px",
              height: "128px",
              width: "128px",
            }}
          />
          <h4 className="list-group-item-heading text-red-500">
            {blog.username}
          </h4>
          <h3 class="list-group-item-heading">{blog.title}</h3>
          <p class="list-group-item-text lead">
            {blog.text}
            <br />
            <a href="#"></a>
          </p>
        </li>
      </ul>

      <div class="flex bg-gray-800 justify-center items-center mb-8 mt-20">
        <form
          class="w-full bg-white p-2 pt-4  shadow-lg"
          onSubmit={writeCommentHandler}
        >
          <div class="flex ml-3">
            <div class="mr-3">
              <img
                class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                alt="User Image"
                src="/78-786420_icono-usuario-joven-transparent-user-png-png-download (1).png"
              />
            </div>
            <div>
              <h1 class="font-semibold">{user.username}</h1>
            </div>
          </div>

          <div class="mt-3 p-3 w-full">
            <textarea
              onChange={changeHandler}
              name="text"
              value={writeCommentData}
              rows="3"
              class="border p-2 rounded w-full"
              placeholder="Write something..."
            ></textarea>
          </div>

          <div class="flex justify-between mx-3">
            <div>
              <button
                class="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700"
                onClick={writeCommentHandler}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <section class="relative flex items-center justify-center  antialiased  bg-gray-100 min-w-screen">
        <div class="container px-0 mx-auto sm:px-5">
          {comments.map((comment) => (
            <div
              class="flex-col w-full bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4  sm:shadow-sm "
              key={comment._id}
            >
              <div class="flex flex-row">
                <img
                  class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                  alt="Noob master's avatar"
                  src="/78-786420_icono-usuario-joven-transparent-user-png-png-download (1).png"
                />
                <div class="flex-col mt-1">
                  <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                    {comment.userCommentData.username}
                    <span class="ml-2 text-xs font-normal text-gray-500"></span>
                  </div>
                  <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                    {comment.userCommentData.text}
                  </div>
                  <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                    <svg
                      class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                      viewBox="0 0 95 78"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </button>
                  <button class="inline-flex items-center px-1 -ml-1 flex-column">
                    <svg
                      class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <hr class="my-2 ml-16 border-gray-200" />
            </div>
          ))}{" "}
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async ({ params, req }) => {
  const { id } = params;
  const res = await axios.post(
    `${process.env.API_URL}/blog/getSingleBlog`,
    { id },
    {
      headers: {
        Cookie: req.headers.cookie,
      },
    }
  );

  const comments = res.data.data.comments;
  const blog = res.data.data;

  return {
    props: { id, blog },
  };
};

export default index;
