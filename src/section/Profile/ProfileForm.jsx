import React, { useState, useEffect } from "react";
import styles from "./ProfileForm.module.css";
const ProfileForm = () => {
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setChangePassword({ ...changePassword, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className={styles.profileContainer}>
        <div className={styles.profileForm}>
          <h2>Change your Password</h2>
          <form onSubmit={handleSubmit}>
            <label>Old Password</label>
            <br />
            <input
              type="password"
              name="oldPassword"
              onChange={handleChange}
              value={changePassword.oldPassword}
              required
              className={styles.profileInput}
            />{" "}
            <br />
            <label>New Password</label> <br />
            <input
              type="text"
              name="NewPassword"
              onChange={handleChange}
              value={changePassword.newPassword}
              required
              className={styles.profileInput}
            />{" "}
            <br />
            <label>Confirm Password</label> <br />
            <input
              type="password"
              name="ConfirmPassword"
              onChange={handleChange}
              value={changePassword.newPassword}
              required
              className={styles.profileInput}
            />
            <br />
            <div className={styles.profileButton1}>
              <button type="submit" className={styles.profileButton}>
                Update Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
