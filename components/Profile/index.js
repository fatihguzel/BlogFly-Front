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
    return <div>index</div>;
  }
};

export default index;
