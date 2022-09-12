import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        © 2022 by Carecord. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
