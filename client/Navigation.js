import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Archives from "./pages/Archives";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/archives" element={<Archives />} />
    </Routes>
  );
};

export default Navigation;
