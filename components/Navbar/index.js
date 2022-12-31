import React from "react";
import NavAuthSide from "./NavAuthSide";
import Link from "next/link";
import styles from "./navbar.module.css"; // Import regular stylesheet

const NavbarItem = () => {
  return (
    <nav class="flex justify-between px-20 py-10  bg-white ">
      <Link class="text-xl text-gray-800 font-bold no-underline" href="/">
        HotCoffee
      </Link>
      <NavAuthSide />
    </nav>
  );
};

export default NavbarItem;
