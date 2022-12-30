import React from "react";
import axios from "axios";
import styles from "./style.module.css";
import Link from "next/link";

const index = ({ id, blog }) => {
  return (
    <div
      className="container"
      style={{
        marginTop: "20px",
      }}
    >
      <ul
        className="list-group"
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
          <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
            <div class="btn-group">
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Add to new list</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">A list</a>
                </li>
                <li>
                  <a href="#">Another list</a>
                </li>
                <li>
                  <a href="#">Third list</a>
                </li>
              </ul>
            </div>
            <div
              style={{
                position: "absolute",
                right: "10px",
              }}
            >
              <Link href="#comments" class="btn btn-dark">
                Yorum Yap
              </Link>

              <Link href="#card card-outline-secondary" class="btn btn-primary">
                Share with your friends
              </Link>
            </div>
          </div>
        </li>
      </ul>

      <div
        class="card card-outline-secondary"
        style={{
          marginTop: "40px",
        }}
      >
        <div class="card-header">
          <h3 class="mb-0">Your Comment</h3>
        </div>
        <div class="card-body">
          <form
            autocomplete="off"
            class="form"
            id="formLogin"
            name="formLogin"
            role="form"
          >
            <div class="form-group">
              <label for="uname1">Comment</label>
              <input
                class="form-control"
                id="uname1"
                name="uname1"
                required=""
                type="text"
                placeholder="please enter your comment..."
              />
            </div>
            <div class="form-check small">
              <label class="form-check-label"></label>
            </div>
            <button class="btn btn-success btn-lg float-right" type="button">
              Send
            </button>
          </form>
        </div>
      </div>
      <div
        class="list-group"
        style={{
          width: "100%",
        }}
      >
        <div
          href="#"
          class="list-group-item list-group-item-action list-group-item-light"
          style={{
            backgroundColor: "#C8E6C9",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque
          laboriosam molestias similique atque perspiciatis nemo reiciendis
          aperiam, labore id deleniti voluptatem omnis ea corporis eum totam
          eligendi, cupiditate temporibus.
          <button
            class="btn btn-default"
            style={{
              position: "absolute",
              right: "3rem",
              bottom: "2px",
            }}
          >
            👍
          </button>
          <button
            class="btn btn-block btn-default"
            style={{
              position: "absolute",
              right: "1rem",
              bottom: "2px",
            }}
          >
            👎
          </button>
        </div>
      </div>
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
  const blog = res.data.data;
  console.log(res.data.data);

  return {
    props: { id, blog },
  };
};

export default index;
