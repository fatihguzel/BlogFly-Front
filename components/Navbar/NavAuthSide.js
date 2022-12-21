import React from "react";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../features/Auth/asyncActions";

const NavAuthSide = () => {
  const router = useRouter();
  const loginedUser = useSelector((state) => state.auth.logined);
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };
  if (!loginedUser) {
    return (
      <>
        <Link
          className={`nav-item nav-link ${styles.navLink} ${
            router.pathname == "/login" && "active"
          }`}
          href="/login"
        >
          Login
        </Link>
        <Link
          className={`nav-item nav-link ${styles.navLink} ${
            router.pathname == "/login" && "active"
          }`}
          href="/register"
        >
          Register
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link
          className={`nav-item nav-link ${styles.navLink} ${
            router.pathname == "/profile" && "active"
          }`}
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className={`nav-item nav-link ${styles.navLink} ${
            router.pathname == "/" && "active"
          }`}
          href="/"
          onClick={logoutHandler}
        >
          Logout
        </Link>
      </>
    );
  }
};

export default NavAuthSide;
