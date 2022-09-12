import React from "react";
import styles from "./test.module.css";

function Modal({ open = false, setOpen, children }) {
  return (
    <div className={styles.container}>
      {open && (
        <div className={styles.modal}>
          <div className={styles.absolute} onClick={() => setOpen((a) => !a)} />
          <div className={styles.contain}>{children}</div>
        </div>
      )}
    </div>
  );
}

export default Modal;
