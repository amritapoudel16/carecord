import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import "./app.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/department" element={<Home />} />
        <Route path="/doctors" element={<Home />} />
        <Route path="/appointment" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};
export default App;
