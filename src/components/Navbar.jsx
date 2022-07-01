import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <div className={styles.topnavbar}>
        <small>061-540806</small>
        <small>carecord@gmail.com</small>
        <div className={styles.toplinkbar}>
          <NavLink className={styles.toplink } to="/signUp">
            SIGN UP
          </NavLink>
          <small>|</small>
          <NavLink className={styles.toplink} to="/signIn" >
            SIGN IN
          </NavLink>
        </div>
      </div>
      <div className={styles.navbar}>
        <h3>Carecord</h3>
        <div className="navlinks">
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.link} to="/about">
            About
          </NavLink>
          <NavLink className={styles.link} to="/department">
            Department
          </NavLink>
          <NavLink className={styles.link} to="/doctors">
            Doctors
          </NavLink>
          <NavLink className={styles.link} to="/appointment">
            <button className={styles.button}>Appointment</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
