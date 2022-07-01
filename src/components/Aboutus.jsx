import React from "react";
import styles from "./Aboutus.module.css";

const Aboutus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h1>We are carecord clinic</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className={styles.contactUs}>Contact us</button>
      </div>
    </div>
  );
};

export default Aboutus;
