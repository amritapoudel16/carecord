import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} />
      <form>
        <h2 className={styles.signHead}>Sign Up</h2>
        <div className={styles.signupForm}>
          <div className={styles.halfForm1}>
            <label className={styles.signUpLabel}>First Name:</label>
            <br />
            <input
              type="text"
              placeholder="first Name"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Last Name:</label>
            <br />
            <input
              type="text"
              placeholder="last Name"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Email:</label>
            <br />
            <input
              type="email"
              placeholder="email"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Password:</label>
            <br />
            <input
              type="password"
              placeholder="password"
              className={styles.signUpInput}
            />
          </div>

          <div>
            <label className={styles.signUpLabel}>Age:</label>
            <br />
            <input
              type="text"
              placeholder="age"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Address:</label>
            <br />
            <input
              type="text"
              placeholder="address"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Phone:</label>
            <input
              type="text"
              placeholder="phone"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Gender:</label>
            <br />
            <input type="radio" /> Male
            <br />
            <input type="radio" /> Female
            <br />
            <input type="radio" /> Others
            <br />
          </div>
        </div>
        <button type="submit" className={styles.signUpButton}>
          Sign Up
        </button>
        <div className={styles.account}>
          Already have an account?{" "}
          <Link to="/signIn" className={styles.signInLink}>
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
