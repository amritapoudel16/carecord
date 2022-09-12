import React, { useRef, useEffect, useState } from "react";
import Card from "../../components/Card";
import Slider from "react-slick";
import styles from "./DoctorList.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import apicall from "../../api/apicall";
import { useParams } from "react-router-dom";
const DoctorList = () => {
  const ref = useRef();
  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    className: "center",
    centerMode: true,
  };
  const { id } = useParams();

  const [departmentDoctors, setDepartmentDoctors] = useState([]);
  const getDoctor = async () => {
    const result = await apicall({
      url: "/departments/" + id + "/doctors",
    });
    if (result.status === 200) {
      setDepartmentDoctors(result.data.Doctors[0].doctors);
    }
  };
  useEffect(() => {
    getDoctor();
  }, []);
  return (
    <div>
      {" "}
      <div>
        <h1>Department Doctors</h1>
        <div className={styles.cardContainer}>
          <Slider ref={ref} {...settings}>
            {departmentDoctors.length > 0 ? (
              departmentDoctors.map((item, id) => {
                return (
                  <div key={id}>
                    <Card key={item.id} doctor={item} />
                  </div>
                );
              })
            ) : (
              <>No data</>
            )}
          </Slider>
        </div>
        <div className={styles.departmentIcons}>
          <div onClick={() => ref.current.slickPrev()}>
            <FaChevronCircleLeft size={30} cursor="pointer" color="gray" />{" "}
          </div>
          <div onClick={() => ref.current.slickNext()}>
            <FaChevronCircleRight size={30} cursor="pointer" color="gray" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
