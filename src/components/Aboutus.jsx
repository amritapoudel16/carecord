import React from "react";
import styles from "./Aboutus.module.css";

const Aboutus = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h5>About us</h5>
        <h1 className={styles.about_title}>We are carecord clinic</h1>
        <p>
          Hey how are you? consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occae pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in cat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className={styles.contactUs}>Contact us</button>
      </div>
    </div>
  );
};

export default Aboutus;
