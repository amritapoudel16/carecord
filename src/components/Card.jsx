import React from "react";
import styles from "./Card.module.css";

const Card = ({ doctor, onBookClick, socialMediaLink }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={doctor.image} alt="" className={styles.cardImage} />
      <div className={styles.doctorName}>{doctor.name}</div>
      <div className={styles.doctorDepartment}>{doctor.department}</div>
      <div className={styles.doctorDescription}>{doctor.description}</div>
      <button className={styles.cardButton}
        onClick={() => {
          onBookClick(doctor);
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default Card;
