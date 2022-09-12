import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import axios from "axios";
import apicall from "../../api/apicall";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    email: "",
    address: "",
    phone: "",
    age: "",
    gender: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await apicall({
      method: "post",
      url: "/register",
      data: {
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password,
        password_confirmation: user.password_confirmation,
        email: user.email,
        address: user.address,
        phone: user.phone,
        age: user.age,
        gender: user.gender,
      },
    });
    navigate("/signIn");
    
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} />
      <form onSubmit={handleSubmit}>
        <h2 className={styles.signHead}>Sign Up</h2>
        <div className={styles.signupForm}>
          <div className={styles.halfForm1}>
            <label className={styles.signUpLabel}>First Name:</label>
            <br />
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              placeholder="first Name"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Last Name:</label>
            <br />
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
              placeholder="last Name"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="email"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="password"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Confirm Password:</label>
            <br />
            <input
              type="password"
              name="password_confirmation"
              value={user.password_confirmation}
              onChange={handleChange}
              placeholder="confirm password"
              className={styles.signUpInput}
            />
          </div>

          <div>
            <label className={styles.signUpLabel}>Age:</label>
            <br />
            <input
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
              placeholder="age"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Address:</label>
            <br />
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              placeholder="address"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Phone:</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="phone"
              className={styles.signUpInput}
            />
            <br />
            <label className={styles.signUpLabel}>Gender:</label>
            <br />
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />{" "}
            Male
            <br />
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />{" "}
            Female
            <br />
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
            />{" "}
            Other
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
