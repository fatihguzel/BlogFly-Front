import styles from "./profile.module.css";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const index = () => {
  const router = useRouter();
  const loginedUser = useSelector((state) => state.auth.logined);
  useEffect(() => {
    if (!loginedUser) router.push("/login");
  }, [loginedUser]);

  if (loginedUser) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div class="form-group">
              <textarea
                class={`form-control ${styles.textarea}`}
                placeholder="Enter the text you want to share"
              ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" id="submit-code" class="btn btn-success">
                Share your post
              </button>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: "20px",
            }}
          >
            <label
              htmlFor="previousPosts"
              className={`previousPosts ${styles.previousPosts}`}
            >
              Son paylaşılan yazılar
            </label>
            <div class="list-group">
              <a href="#" class="list-group-item active">
                <h4 class="list-group-item-heading">
                  First List Group Item Heading
                </h4>
                <p class="list-group-item-text">List Group Item Text</p>
              </a>
              <a href="#" class="list-group-item">
                <h4 class="list-group-item-heading">
                  Second List Group Item Heading
                </h4>
                <p class="list-group-item-text">List Group Item Text</p>
              </a>
              <a href="#" class="list-group-item">
                <h4 class="list-group-item-heading">
                  Third List Group Item Heading
                </h4>
                <p class="list-group-item-text">List Group Item Text</p>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default index;
