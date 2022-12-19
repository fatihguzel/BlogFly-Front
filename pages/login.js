import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "../components/Login";
const login = () => {
  const router = useRouter();
  const loginedUser = useSelector((state) => state.auth.logined);

  useEffect(() => {
    if (loginedUser) router.push("/profile");
  }, [loginedUser]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default login;
