import React, { useRef } from "react";
import Slider from "react-slick";
import Card from "../../components/Card";
import styles from "./Doctors.module.css";
import {FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
const Doctors = () => {
  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    className: "center",
    centerMode: true,
  };

  const ref = useRef();

  console.log(ref);

  const doctorsList = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Pabita Pun",
      department: "Neurologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Pabita Pun",
      department: "Neurologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Pabita Pun",
      department: "Neurologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Pabita Pun",
      department: "Neurologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Pabita Pun",
      department: "Neurologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Pabita Pun",
      department: "Neurologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Pabita Pun",
      department: "Neurologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dr. Pabita Pun",
      department: "Neurologist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
  ];
  const handleBookClick = (doctor) => {
    console.log(doctor);
  };
  return (
    <div className={styles.containerWrapper}>
      <h1>Our Qualified Doctors</h1>
      <p className={styles.doctorDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      <div className={styles.cardContainer}>
        <Slider ref={ref} {...settings}>
          {doctorsList.map((item, id) => {
            return (
              <div>
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
      <div onClick={() => ref.current.slickPrev()}><FaChevronCircleLeft size={30} cursor = "pointer" color="gray"/> </div>
      <div onClick={() => ref.current.slickNext()}><FaChevronCircleRight size={30} cursor = "pointer" color="gray"/> </div>
      
      </div>
    </div>
  );
};

export default Doctors;
