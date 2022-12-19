import React from "react";
import NavAuthSide from "./NavAuthSide";
import Link from "next/link";
import styles from "./navbar.module.css"; // Import regular stylesheet

const NavbarItem = () => {
  return (
    <div style={{}}>
      <nav
        className="navbar navbar-expand-lg  "
        style={{ backgroundColor: "#E0E0E0" }}
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} href="/">
            BlogFly
          </Link>

          <div className="navbar-nav ms-auto">
            <NavAuthSide />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarItem;
