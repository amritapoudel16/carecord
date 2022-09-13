import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./DoctorDetails.module.css";
import apicall from "../../api/apicall";
import AppointmentModal from "../../components/AppointmentModal";
import {
  MdLocationPin,
  MdEmail,
  MdPhone,
  MdFacebook,
  MdOutlineLanguage,
} from "react-icons/md";
const DoctorDetails = () => {
  const SERVER = process.env.REACT_APP_SERVER_URL;
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [doctor, setDoctor] = useState({});
  const getDoctorDetail = async () => {
    const result = await apicall({
      url: "/doctors/" + id,
    });

    if (result.status === 200) {
      setDoctor(result.data.doctor);
      console.log(result.data);
        }
  };

  useEffect(() => {
    getDoctorDetail();
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.doctorsImg}>
          <img src={SERVER + doctor.picture} alt="home" />
        </div>
        <div className={styles.doctorDes}>
          <h3>{doctor.first_name}</h3>
          <h4>{doctor.department?.department_name}</h4>
          <p>
            s simplemente el texto de relleno de las imprentas y archivos de
            texto. Lorem Ipsum ha sido el texto de relleno estándar de las
            industrias desde el año 1500, cuando un impresor N. del T. persona
            que se dedica a la imprenta
            <br />
            <br /> desconocido usó una galería de textos y los mezcló de tal
            manera que logró hacer un libro de textos especimen. No sólo
            sobrevivió 500 años, sino que tambien ingresó como texto de relleno
            en documentos electrónicos, quedando esencialmente igual al
            original. Fue popularizado en los 60s con la creación de las hojas
          </p>
          <div className={styles.doctorAddress}>
            <MdLocationPin size={25} />
            <div style={{ margin: " 0 10px" }}>{doctor.address}</div>
          </div>
          <div className={styles.doctorEmail}>
            <MdEmail size={25} />
            <div style={{ margin: " 0 10px" }}>{doctor.email}</div>
          </div>
          <div className={styles.doctorPhone}>
            <MdPhone size={25} />
            <div style={{ margin: " 0 10px" }}>{doctor.phone}</div>
          </div>
          <div className={styles.doctorAppointment}>
            <div>
              <MdFacebook size={25} style={{ margin: " 0 10px" }} />
              <MdOutlineLanguage size={25} />
            </div>

            <div style={{ margin: " 0 10px" }}>
              <button onClick={() => setOpen((open) => !open)}>
                Get Appointment
              </button>
              <AppointmentModal
                open={open}
                setOpen={() => setOpen((a) => !a)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
