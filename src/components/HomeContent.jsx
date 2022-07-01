import React, { useState } from "react";
import styles from "./HomeContent.module.css";
import Navbar from "./Navbar";
import { BsFillXCircleFill } from "react-icons/bs";
const HomeContent = () => {
  const [open, setOpen] = useState(false);
  const [appointment, setAppointment] = useState({
    hospitalId: "",
    patientName: "",
    age: "",
    gender: "",
    department: "",
    doctorName: "",
    selectedSlot: "",
  });
  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <Navbar></Navbar>
      </div>
      <div className={styles.container2}>
        <h5>WELCOME TO CARECORD</h5>
        <br />
        <h1>We are here for your care</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button
          className={styles.homeButton}
          onClick={() => setOpen((dat) => !dat)}
        >
          Make an appointment
        </button>
      </div>
      {open && (
        <div className={styles.modelWrapper}>
          <div
            className={styles.modalAbsolute}
            onClick={() => setOpen((dat) => !dat)}
          />

          <div className={styles.modalContain}>
            <div className={styles.title}>
              <h3>Appointment Details</h3>
            </div>
            <div className={styles.cross}>
              <BsFillXCircleFill
                size={40}
                onClick={() => setOpen((dat) => !dat)}
              />
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.form1}>
                <div className={styles.form2}>
                  <label className={styles.appointmentLabel}>
                    Hospital Id:
                  </label>
                  <br />
                  <input
                    className={styles.appointmentInput}
                    type="text"
                    placeholder="Hospital id"
                    name="hospitalId"
                    value={appointment.hospitalId}
                    onChange={handleChange}
                  />
                  <br />
                  <label className={styles.appointmentLabel}>
                    Patient's name:
                  </label>
                  <br />
                  <input
                    className={styles.appointmentInput}
                    type="text"
                    placeholder="Patient's name"
                    name="patientName"
                    value={appointment.patientName}
                    onChange={handleChange}
                  />
                  <br />
                  <label className={styles.appointmentLabel}>Age:</label>
                  <br />
                  <input
                    className={styles.appointmentInput}
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={appointment.age}
                    onChange={handleChange}
                  />
                  <br />
                  <label className={styles.appointmentLabel}>Gender:</label>
                  <br />
                  <input
                    className={styles.appointmentInput}
                    type="radio"
                    value="Male"
                    onChange={handleChange}
                    name="gender"
                  />
                  Male
                  <br />
                  <input
                    className={styles.appointmentInput}
                    type="radio"
                    value="Female"
                    onChange={handleChange}
                    name="gender"
                  />
                  Female
                  <br />
                  <input
                    className={styles.appointmentInput}
                    type="radio"
                    value="Male"
                    onChange={handleChange}
                    name="gender"
                  />
                  Other
                </div>
                <div className={styles.form3}>
                  <label className={styles.appointmentLabel}>Department:</label>
                  <br />

                  <select
                    className={styles.appointmentSelect}
                    onChange={handleChange}
                    value={appointment.department}
                    name="department"
                  >
                    <option value={""} hidden selected>
                      {"---"}
                    </option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                  </select>
                  <br />
                  <label className={styles.appointmentLabel}>
                    Doctor's name:
                  </label>
                  <br />
                  <select
                    className={styles.appointmentSelect}
                    onChange={handleChange}
                    value={appointment.doctorName}
                    name="doctorName"
                  >
                    <option value={""} hidden selected>
                      {"---"}
                    </option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                    <option>Neurology</option>
                  </select>
                  <br />
                  <label className={styles.appointmentLabel}>
                    Selected time slot:
                  </label>
                  <br />
                  <select
                    className={styles.appointmentSelect}
                    onChange={handleChange}
                    value={appointment.selectedSlot}
                    name="selectedSlot"
                  >
                    <option value={""} hidden selected>
                      {"---"}
                    </option>
                    <option>9:00-9:15</option>
                    <option>9:00-9:15</option>
                    <option>9:00-9:15</option>
                    <option>9:00-9:15</option>
                    <option>9:00-9:15</option>
                    <option>9:00-9:15</option>
                  </select>
                  <br />
                </div>
              </div>
              <button className={styles.appointmentButton} type="submit">
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeContent;
