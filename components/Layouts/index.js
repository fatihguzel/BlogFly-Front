import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavbarItem from "../Navbar";
import { getProfileAction } from "../../features/auth/asyncActions";

const index = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction()); // Giriş yapmış bir kullanıcı mevcut mu ?
  }, []);

  return (
    <main>
      <NavbarItem />
      {children}
    </main>
  );
};

export default index;
