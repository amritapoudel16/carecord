import React from "react";
import styles from "./Department.module.css";

const Department = () => {
  const departments = [
    {
      id: 1,
      name: "Neurology",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      name: "Opthalmology",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      name: "Dental",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      name: "Surgical",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      name: "Cardiology",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 6,
      name: "X-Ray",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 7,
      name: "Dental",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 8,
      name: "Traumatology",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 9,
      name: "Neurology",
      description: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.gridContainer}>
        {departments.map((department, id) => (
          <div className={styles.gridItems}>
            <div key={departments.id} className={styles.departmentName}>{department.name}</div>
            <div key={departments.id} className={styles.departmentDescription}>{department.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
