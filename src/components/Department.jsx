import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Department.module.css";
import apicall from "./../api/apicall";

const Department = () => {
  const [departments, setDepartment] = useState([]);
  const navigate = useNavigate();

  const getDepartment = async () => {
    const result = await apicall({
      url: "/departments?accept=Application/json",
    });
    setDepartment(result.data.Departments);
    console.log(result);
  };

  useEffect(() => {
    getDepartment();
  }, []);

  return (
    <div id="department" className={styles.container}>
      <div className={styles.image}></div>

      <div className={styles.gridContainer}>
        {departments.map((department, id) => (
          <div
            className={styles.gridItems}
            key={id}
            onClick={() =>
              navigate("/departmentdetails/" + department.department_id)
            }
          >
            <div key={departments.id} className={styles.departmentName}>
              {department.department_name}
            </div>
            <div key={departments.id} className={styles.departmentDescription}>
              {department.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
