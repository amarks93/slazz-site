import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./components/Form";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
    </Routes>
  );
};

export default Navigation;
