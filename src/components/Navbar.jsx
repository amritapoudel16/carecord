import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { UserContext } from "./../App";
import AppointmentModal from "./AppointmentModal";
import cx from "classnames";
import { MdMenu, MdPhone, MdEmail } from "react-icons/md";
import apicall from "./../api/apicall";
import MobileView from "./MobileView";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [open, setOpen] = useState(false);
  const { muser, setmUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const handleAppointment = () => {
    if (muser.login === false) {
      navigate("/signUp");
      return;
    }
    setOpen((open) => !open);
  };
  const handleScroll = () => {
    const offset = window.scrollY;
    setSticky(offset > 700);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const logoutFunction = async () => {
    const result = await apicall({
      method: "post",
      url: "/logout",
    });

    if (result.status === 200) {
      setmUser({
        login: false,
        muser: {},
      });

      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <>
      <nav
        className={cx(sticky ? styles.sticky : styles.none, styles.something)}
      >
        <div className={styles.topnavbar}>
          <small>
            <MdPhone size={20} />
            &nbsp; 061-540806
          </small>
          <small>
            <MdEmail size={20} /> &nbsp; carecord@gmail.com
          </small>
          {!muser.login ? (
            <div className={styles.toplinkbar}>
              <NavLink className={styles.toplink} to="/signUp">
                SIGN UP
              </NavLink>
              <small>|</small>
              <NavLink className={styles.toplink} to="/signIn">
                SIGN IN
              </NavLink>
            </div>
          ) : (
            <div className={styles.toplinkbar2}>
              <NavLink className={styles.toplink2} to="/profile">
                PROFILE
              </NavLink>
              <small>|</small>
              <div className={styles.toplink2} onClick={logoutFunction}>
                LOGOUT
              </div>
            </div>
          )}
        </div>
        <div className={styles.navbar}>
          <a href="/" className={styles.logo}>
            {" "}
            <img
              src={process.env.PUBLIC_URL + "/images/Carecord1.png"}
              alt="Carecord"
            />
          </a>

          <MdMenu
            className={styles.menu}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          />
          <div className={styles.navLinks}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#department">Department</a>
              </li>
              <li>
                <a href="#doctors">Doctors</a>
              </li>
              {/* <NavLink className={styles.link} to="/appointment"> */}
              <li>
                <button className={styles.button} onClick={handleAppointment}>
                  Appointment
                </button>
              </li>
              {/* </NavLink> */}
              <AppointmentModal
                open={open}
                setOpen={() => setOpen((a) => !a)}
              />
            </ul>
          </div>
        </div>
        {isNavExpanded && (
          <MobileView
            closeMobileNavbar={() => {
              setIsNavExpanded((dat) => !dat);
            }}
          />
        )}
      </nav>
    </>
  );
}

export default Navbar;
