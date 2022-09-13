import React from "react";
import Footer from "./Footer";
import HomeContent from "./HomeContent";
import styles from "./Home.module.css";
import Aboutus from "./Aboutus";
import Department from "./Department";
import Doctors from "../section/Home/Doctors";

const Home = () => {
  return (
    <div className={styles.containerWrapper}>
      <HomeContent />
      <Aboutus />
      <Department />
      <Doctors />
    </div>
  );
};

export default Home;
