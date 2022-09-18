import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignInForm.module.css";
import apicall from "./../../api/apicall";
import { toast } from "react-toastify";
import { UserContext } from "./../../App";

const SignInForm = () => {
  const { muser, setmUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await apicall({
      method: "post",
      url: "/login",
      data: {
        email: user.email,
        password: user.password,
      },
    });

    localStorage.setItem("token", res.data.token);

    setmUser({
      ...muser,
      login: true,
    });

    navigate("/userdashboard");
  };
  return (
    <div className={styles.contain}>
      <div className={styles.container}>
        <div className={styles.imageContainer} />
        <form onSubmit={handleSubmit}>
          <h2 className={styles.signHead}>Sign In</h2>

          <div className={styles.halfForm}>
            <label className={styles.signInLabel}>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="email"
              className={styles.signInInput}
            />
            <br />
            <label className={styles.signInLabel}>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="password"
              className={styles.signInInput}
            />

            <Link to="/signUp" className={styles.forgotpassword}>
              Forgot Password?
            </Link>
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
    </div>
  );
};

export default SignInForm;
