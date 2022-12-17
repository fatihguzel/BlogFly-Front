import React from "react";
import NavAuthSide from "./NavAuthSide";
import styles from "./navbar.module.css";

const NavbarItem = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/">
            BlogFly
          </a>

          <div className="navbar-nav ms-auto">
            <NavAuthSide />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarItem;
