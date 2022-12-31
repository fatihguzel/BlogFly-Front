import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsAction } from "../../../features/Blogs/asyncActions";
import styles from "./recentposts.module.css";

const recentPosts = () => {
  const sharedPosts = useSelector((state) => state.blog.sharedBlogs);
  const loginedUser = useSelector((state) => state.auth.user);
  const email = loginedUser.email;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsAction({ email }));
  }, []);

  return (
    <div className="row">
      <label
        htmlFor="previousPosts"
        className={`previousPosts ${styles.previousPosts}`}
        style={{
          marginTop: "50px",
        }}
      >
        Son paylaşılan yazılar
      </label>

      {sharedPosts.map((blog) => (
        <div className="container" key={blog._id}>
          <div className="row">
            <div
              className="col-12 col-sm-8 col-lg-5"
              style={{
                width: "100%",
                backgroundColor: "#E0E0E0",
              }}
            >
              <ul className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div
                    className="flex-column"
                    style={{
                      fontWeight: "bolder",
                      fontSize: "20px",
                    }}
                  >
                    {blog.title}
                    <p>
                      <small
                        style={{
                          fontWeight: "normal",
                          fontSize: "15px",
                          fontStyle: "italic",
                        }}
                      >
                        {blog.text}
                      </small>
                    </p>
                  </div>
                  <div className={`image-parent ${styles.imageParent}`}>
                    <img
                      src="/Blog_pic.png"
                      className="img-fluid"
                      alt="quixote"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                  </div>
                </a>
              </ul>
            </div>
          </div>
          <Link
            type="submit"
            id="submit-code"
            className="p-3 text-sm font-bold tracking-wide uppercase rounded bg-slate-300 dark:text-black no-underline"
            href={`/blog/${blog._id}`}
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default recentPosts;
