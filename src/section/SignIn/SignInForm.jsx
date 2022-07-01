import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignInForm.module.css";

const SignInForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} />
      <form>
        <h2 className={styles.signHead}>Sign In</h2>

        <div className={styles.halfForm}>
          <label className={styles.signInLabel}>Email:</label>
          <br />
          <input
            type="email"
            placeholder="email"
            className={styles.signInInput}
          />
          <br />
          <label className={styles.signInLabel}>Password:</label>
          <br />
          <input
            type="password"
            placeholder="password"
            className={styles.signInInput}
          />
          
          <Link to="/signUp" className={styles.forgotpassword}>Forgot Password?</Link>
        </div>

        <button type="submit" className={styles.signUpButton}>
          Sign In
        </button>
        <div className={styles.account}>
          Do not have an account?{" "}
          <Link to="/signUp" className={styles.signUpLink}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
