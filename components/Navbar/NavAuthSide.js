import React from "react";
import { useRouter } from "next/router";

const NavAuthSide = () => {
  const router = useRouter();

  return (
    <>
      <a
        className={`nav-item nav-link ${
          router.pathname == "/login" && "active"
        }`}
        href="/login"
      >
        Login
      </a>
      <a
        className={`nav-item nav-link ${
          router.pathname == "/register" && "active"
        }`}
        href="/register"
      >
        Register
      </a>
    </>
  );
};

export default NavAuthSide;
