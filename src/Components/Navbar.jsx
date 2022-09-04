import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <style jsx="true">
        {`
          .active {
            color: #ffc107 !important;
            font-weight: bold !important;
            border-bottom: 3px solid #ffc107 !important;
          }
        `}
      </style>

      <nav className={`${styles.navbar} navbar navbar-expand-lg sticky-top`}>
        <div className="container-fluid">
          <button
            onClick={handleClick}
            className={`${styles.navbarToggler} navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {toggle ? (
              <FaTimes  className="text-dark" />
            ) : (
              <a style={{color: 'white'}}  href="/tinmeline">Timeline</a>
            )}
          </button>
          <div
            className={`${toggle ? "" : "collapse"} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-5 gap-2 mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  onClick={handleClick}
                  className={`${styles.navLink} nav-link`}
                  to="/timeline"
                >
                  Timeline
                </NavLink>
              </li>
              <li className={`${styles.navItem} nav-item`}>
                <NavLink
                  onClick={handleClick}
                  activeclassname="active"
                  className={`${styles.navLink} nav-link`}
                  aria-current="page"
                  to="/albums"
                >
                  Albums
                </NavLink>
              </li>
              <li className={`${styles.navItem} nav-item`}>
                <NavLink
                  onClick={handleClick}
                  activeclassname="active"
                  className={`${styles.navLink} nav-link`}
                  aria-current="page"
                  to="/events"
                >
                  Events
                </NavLink>
              </li>
              <li className={`${styles.navItem} nav-item`}>
                <NavLink
                  onClick={handleClick}
                  activeclassname="active"
                  className={`${styles.navLink} nav-link`}
                  aria-current="page"
                  to="/favourites"
                >
                  Favourites
                </NavLink>
              </li>
            </ul>
            <div className={`${styles.buttons} d-flex gap-2`}>
              <button style={{cursor: 'pointer'}} className="btn btn-outline-warning rounded-pill p-2">+New category</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
