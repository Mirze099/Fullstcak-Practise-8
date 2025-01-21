import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className={`${styles.nav}`}>
        <div className={`${styles.navLeft}`}>
          <h1>Banker .</h1>
        </div>
        <div className={`${styles.navRight}`}>
          <ul>
            <li>
              <NavLink to={""} className={`${styles.navNav}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"favorites"} className={`${styles.navNav}`}>
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink to={"addproduct"} className={`${styles.navNav}`}>
                Add Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
