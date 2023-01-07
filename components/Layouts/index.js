import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavbarItem from "../Navbar";
import { getProfileAction } from "../../features/Auth/asyncActions";
import Footer from "../Footer";
const index = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction()); // Giriş yapmış bir kullanıcı mevcut mu ?
  }, [dispatch]);

  return (
    <main className="">
      <NavbarItem />
      {children}
      <Footer />
    </main>
  );
};

export default index;
