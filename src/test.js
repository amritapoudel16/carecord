import React from "react";
import styles from "./test.module.css";

function Test() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.container}>
      <div onClick={() => setOpen((a) => !a)}>button</div>
      {open && (
        <div className={styles.modal}>
          <div className={styles.absolute} onClick={() => setOpen((a) => !a)} />
          <div className={styles.contain}>aaa</div>
        </div>
      )}
    </div>
  );
}

export default Test;
