import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "../../components/Card";
import styles from "./Doctors.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import apicall from "../../api/apicall";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const getDoctor = async () => {
    const result = await apicall({
      url: "/doctors?accept=Application/json",
    });
    if (result.status === 200) {
      setDoctors(result.data.Doctors);
    }
    console.log(result);
  };
  useEffect(() => {
    getDoctor();
  }, []);

  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  const ref = useRef();

  console.log(ref);
  const handleBookClick = (doctor) => {
    console.log(doctor);
  };
  return (
    <div id="doctors" className={styles.containerWrapper}>
      <h1>Our Qualified Doctors</h1>
      <p className={styles.doctorDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      <div className={styles.cardContainer}>
        <Slider ref={ref} {...settings}>
          {doctors.map((item, id) => {
            return (
              <div key={id}>
                <Card
                  key={item.id}
                  doctor={item}
                  onBookClick={handleBookClick}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={styles.icons}>
        <div onClick={() => ref.current.slickPrev()}>
          <FaChevronCircleLeft size={30} cursor="pointer" color="gray" />{" "}
        </div>
        <div onClick={() => ref.current.slickNext()}>
          <FaChevronCircleRight size={30} cursor="pointer" color="gray" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
