import React, { useState } from "react";
import styles from "./AppointmentDetailsModal.module.css";
import { BsFillXCircleFill } from "react-icons/bs";
const AppointmentDetailsModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
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
            <form className={styles.form}>
              <div className={styles.form1}>
                <div className={styles.form2}>
                  <label>Hospital Id:</label>
                  <br />
                  <input type="text" placeholder="Hospital id" />
                  <br />
                  <label>Patient's name:</label>
                  <br />
                  <input type="text" placeholder="Patient's name" />
                  <br />
                  <label>Age:</label>
                  <br />
                  <input type="number" placeholder="Age" />
                  <br />
                  <label>Gender:</label>
                  <br />
                  <input type="radio" value="Male" />
                  Male
                  <br />
                  <input type="radio" value="Female" />
                  Female
                </div>
                <div className={styles.form3}>
                  <label>Department:</label>
                  <br />
                  <select>
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
                  <label>Doctor's name:</label>
                  <br />
                  <select>
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
                  <label>Selected time slot:</label>
                  <br />
                  <select>
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
              <button className={styles.appointmentButton}>Book Now</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentDetailsModal;
