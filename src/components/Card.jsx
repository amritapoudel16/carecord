import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ doctor, onBookClick, socialMediaLink, onmousecClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.cardContainer}
      onClick={() => navigate("/doctordetails/" + doctor.doctor_id)}
    >
      <div className={styles.doctor_image_wrapper}>
        <img src={doctor.picture} alt="" className={styles.cardImage} />
      </div>
      <div className={styles.doctorName}>{doctor.first_name}</div>
      <div className={styles.doctorDepartment}>{doctor.email}</div>
      <div className={styles.doctorDescription}>{doctor.medical_degree}</div>
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
