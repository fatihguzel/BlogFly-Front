import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../features/Auth/asyncActions";
import styles from "./register.module.css";

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    await dispatch(registerAction(registerData));
  };
  return (
    <section className="vh-100">
      <div className={`container-fluid h-custom ${styles.hCustom}`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="aerial-background-blog-cafe.jpg"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={registerHandler}>
              <div className="form-outline mb-4">
                <label className="form-label " htmlFor="form3Example3">
                  User name
                </label>
                <input
                  onChange={changeHandler}
                  type="username"
                  id="form3Example3"
                  name="username"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid user name"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label " htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  onChange={changeHandler}
                  type="email"
                  id="form3Example3"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label " htmlFor="form3Example4">
                  Password
                </label>
                <input
                  onChange={changeHandler}
                  type="password"
                  id="form3Example4"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-300"
                  onClick={registerHandler}
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0 ">
                  Do you already have an account?{" "}
                  <Link href="/login" className="link-danger">
                    Login
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
