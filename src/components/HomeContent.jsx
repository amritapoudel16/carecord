import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeContent.module.css";
import Navbar from "./Navbar";
import { UserContext } from "../App";
import AppointmentModal from "./AppointmentModal";

const HomeContent = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { muser, setmUser } = React.useContext(UserContext);
  const handleAppointment = () => {
    if (muser.login === false) {
      navigate("/signUp");
    }
    setOpen((dat) => !dat);
  };
  return (
    <div id="home" className={styles.container}>
      <div className={styles.container1}></div>
      <div className={styles.container2}>
        <h5>WELCOME TO CARECORD</h5>
        <br />
        <h1>We are here for your care</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button
          className={styles.appointmentButton}
          onClick={handleAppointment}
        >
          Make an appointment
        </button>
        <AppointmentModal open={open} setOpen={() => setOpen((dat) => !dat)} />
      </div>
    </div>
  );
};

export default HomeContent;
