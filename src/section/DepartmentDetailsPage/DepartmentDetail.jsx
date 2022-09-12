import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apicall from "../../api/apicall";
import styles from "./DepartmentDetail.module.css";

const DepartmentDetail = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState({});
  const getDepartmentDetail = async () => {
    const result = await apicall({
      url: "/departments/" + id,
    });

    if (result.status === 200) {
      setDepartment(result.data.selectedDepartment[0]);
      console.log(result.data.selectedDepartment);
    }
  };

  useEffect(() => {
    getDepartmentDetail();
  }, []);

  return (
    <div>
      <div className={styles.departmentContainer}>
        <h1>Department {department.department_name}</h1>
      </div>
      <div>
        <p>{department.description}</p>
      </div>
    </div>
  );
};

export default DepartmentDetail;
