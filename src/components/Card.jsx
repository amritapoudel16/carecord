import React from "react";
import styles from "./Card.module.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SERVER = process.env.REACT_APP_SERVER_URL;
const Card = ({ doctor, onBookClick, socialMediaLink, onmousecClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.cardContainer}
      onClick={() => navigate("/doctordetails/" + doctor.doctor_id)}
    >
      <div className={styles.doctor_image_wrapper}>
        <img
          src={SERVER + doctor.picture}
          alt=""
          className={styles.cardImage}
        />
      </div>
      <div className={styles.doctorName}>{doctor.first_name}</div>
      <div className={styles.doctorDepartment}>
        <MdEmail size={20} /> &nbsp;
        {doctor.email}
      </div>
      <div className={styles.doctorDescription}>
        <FaFacebook size={20} /> &nbsp;
        <FaTwitter size={20} /> &nbsp;
        <FaInstagram size={20} /> &nbsp;
      </div>
      <button
        className={styles.cardButton}
        onClick={() => {
          onBookClick(doctor);
        }}
      >
        View Profile
      </button>
    </div>
  );
};

export default Card;
