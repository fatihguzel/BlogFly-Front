import styles from "./profile.module.css";
import React, { useEffect } from "react";
import RecentPosts from "./RecentPosts/RecentPosts";
import { useSelector } from "react-redux";

const index = () => {
  const loginedUser = useSelector((state) => state.auth.logined);

  return (
    <>
      {" "}
      {!loginedUser ? (
        <></>
      ) : (
        <div className="container">
          <div className="row">
            <div className="form-group">
              <textarea
                className={`form-control ${styles.textarea}`}
                placeholder="Enter the text you want to share..."
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                id="submit-code"
                className="btn btn-success"
              >
                Share your post
              </button>
            </div>
          </div>
          <RecentPosts />
        </div>
      )}
    </>
  );
};

export default index;
