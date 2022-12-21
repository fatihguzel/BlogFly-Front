import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsAction } from "../../../features/Blogs/asyncActions";
import styles from "./recentposts.module.css";

const recentPosts = () => {
  const sharedPosts = useSelector((state) => state.blog.sharedBlogs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsAction());
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
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-sm-8 col-lg-5"
              style={{
                width: "100%",
                backgroundColor: "#E0E0E0",
              }}
            >
              <ul class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div
                    class="flex-column"
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
                  <div class={`image-parent ${styles.imageParent}`}>
                    <img
                      src="/Blog_pic.png"
                      class="img-fluid"
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
            className="btn btn-outline"
            style={{
              width: "10%",
              marginBottom: "50px",
              color: "black",
              backgroundColor: "#B0BEC5",
            }}
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
