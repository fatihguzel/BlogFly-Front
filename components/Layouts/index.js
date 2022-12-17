import React from "react";
import NavbarItem from "../Navbar";

const index = ({ children }) => {
  return (
    <main>
      <NavbarItem />
      {children}
    </main>
  );
};

export default index;
