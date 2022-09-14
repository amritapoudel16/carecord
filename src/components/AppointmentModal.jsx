import { React, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillXCircleFill } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import apicall from "../api/apicall";
import styles from "./AppointmentModal.module.css";

const AppointmentModal = ({ open = false, setOpen }) => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
  const [appointmentToDoctor, setAppointmentToDoctor] = useState(false);
  const [visible, setVisible] = useState(false);
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
  const [appointment, setAppointment] = useState({
    symptoms: "",
    selectedDate: "",
    favorableTime: "",
    searchDoctorName: "",
    doctor_id: null,
  });

  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e) => {
    console.log(e.target.value);
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let apiDate = new Date(startDate);
    const res = await apicall({
      method: "post",
      url: "/appointments",
      data: {
        appointment_date:
          apiDate.getFullYear() +
          "-" +
          (apiDate.getMonth() + 1) +
          "-" +
          apiDate.getDate(),
        appoint_time: appointment.favorableTime,
        symptoms: appointment.symptoms,
        doctor_id: appointment.doctor_id,
      },
    });
    if (res.status === 200) {
      setOpen((open) => !open);
    }
  };
  const onDateChanged = (date) => {
    setStartDate(date);
  };
  if (!open) {
    return;
  }
  console.log(doctors);
  return (
    <div className={styles.modelWrapper}>
      <div
        className={styles.modalAbsolute}
        onClick={() => setOpen((dat) => !dat)}
      />

      <div className={styles.modalContain}>
        <div className={styles.appointmentTitle}>
          <h3>Appointment Details</h3>
        </div>
        <div className={styles.cross}>
          <BsFillXCircleFill size={40} onClick={() => setOpen((dat) => !dat)} />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form1}>
            <div className={styles.form2}>
              <label
                className={styles.appointmentLabel}
                style={{ color: "black" }}
              >
                What you are suffering from<span>*</span>:
              </label>
              <br />
              <textarea
                className={styles.appointmentInput}
                type="text"
                placeholder="eg: symptoms"
                name="symptoms"
                rows={6}
                cols={40}
                maxLength={100}
                value={appointment.hospitalId}
                onChange={handleChange}
              />
              <br />
              <label className={styles.appointmentLabel}>
                Select preferable date <span>*</span>:
              </label>
              <br />
              <DatePicker
                className={styles.datecss}
                selected={startDate}
                onChange={onDateChanged}
                name="selectedDate"
                placeholder="enter date"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                // filterDate={(date) => date.getDay() !== 6}
              />
            </div>

            <div className={styles.form3}>
              <label className={styles.appointmentLabel}>
                Select preferable time<span>*</span>:
              </label>
              <br />
              <input
                type="time"
                name="favorableTime"
                className={styles.appointmentInput}
                value={appointment.favorableTime}
                onChange={handleChange}
              />

              <br />
              {!appointmentToDoctor ? (
                <div>
                  <label className={styles.appointmentLabel}>
                    Preferred doctor if any:
                  </label>
                  <br />
                  <div>
                    <input
                      className={styles.appointmentInput}
                      type="text"
                      name="searchDoctorName"
                      value={appointment.searchDoctorName}
                      onChange={(e) => {
                        setAppointment({
                          ...appointment,
                          searchDoctorName: e.target.value,
                        });
                        setVisible(true);
                      }}
                      placeholder="Search doctors"
                    />
                    <div className={styles.doctorList}>
                      {visible &&
                        doctors.map((val, key) => {
                          if (
                            val.first_name
                              .toLowerCase()
                              .includes(
                                appointment.searchDoctorName.toLowerCase()
                              )
                          ) {
                            return (
                              <div
                                key={key}
                                onClick={() => {
                                  setAppointment({
                                    ...appointment,
                                    searchDoctorName: val.first_name,
                                    doctor_id: val.doctor_id,
                                  });
                                  setVisible(false);
                                }}
                              >
                                <ul>{val.first_name}</ul>
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <button className={styles.appointmentButton} type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
