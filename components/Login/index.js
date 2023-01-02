import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../features/Auth/asyncActions";
import styles from "./login.module.css";

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction(loginData));
  };
  return (
    <section className="vh-100 mb-10">
      <div className={`container-fluid h-custom  ${styles.hCustom}`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="aerial-background-blog-cafe.jpg"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={loginHandler}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  onChange={changeHandler}
                  type="email"
                  id="form3Example3"
                  name="email"
                  value={loginData.email}
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <input
                  onChange={changeHandler}
                  type="password"
                  id="form3Example4"
                  name="password"
                  value={loginData.password}
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-blue-300 dark:text-gray-900"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={loginHandler}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link href="/register" className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
