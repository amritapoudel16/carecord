import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import UserDashboard from "./components/UserDashboard";
import "./app.css";
import DepartmentDetails from "./pages/DepartmentDetails";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import DoctorDetails from "./section/DoctorDetails/DoctorDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

export const UserContext = React.createContext();

const App = () => {
  const [muser, setmUser] = React.useState({
    login: localStorage.getItem("token") ? true : false,
    muser: {},
  });
  return (
    <div style={{ position: "relative" }}>
      <UserContext.Provider value={{ muser, setmUser }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/department" element={<Home />} />
          <Route path="/doctors" element={<Home />} />
          <Route path="/appointment" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/doctordetails/:id" element={<DoctorDetails />} />
          <Route
            path="/departmentdetails/:id"
            element={<DepartmentDetails />}
          />
          <Route path="/profile" element={<Profile />} />
          {localStorage.getItem("token") ? (
            <Route path="/userdashboard" element={<UserDashboard />} />
          ) : null}
        </Routes>
        <Footer />
      </UserContext.Provider>
      <ToastContainer />
    </div>
  );
};
export default App;
