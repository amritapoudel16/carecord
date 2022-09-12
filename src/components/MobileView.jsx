import React from "react";
import styles from "./MobileView.module.css";
import { MdClose } from "react-icons/md";
const MobileView = ({ closeMobileNavbar }) => {
  return (
    <div>
      <div className={styles.mobileWrapper}>
        <div className={styles.mobileAbsolute} />
        <div className={styles.mobileContain}>
          <div className={styles.closeNavbar}>
            <div>
              <a href="/" className={styles.logo}>
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "/images/Carecord1.png"}
                  alt="Carecord"
                />
              </a>
            </div>
            <div>
              <MdClose size={35} onClick={closeMobileNavbar} />
            </div>
          </div>
          <ul>
            <li>
              <a href="#home" onClick={closeMobileNavbar}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMobileNavbar}>
                About
              </a>
            </li>

            <li>
              <a href="#department" onClick={closeMobileNavbar}>
                Department
              </a>
            </li>

            <li>
              <a href="#doctors" onClick={closeMobileNavbar}>
                Doctors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
