import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Archives from "./pages/Archives";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Account from "./pages/Account";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Authentication from "./pages/Authentication";

import { loadUser } from "./store/auth";

const Navigation = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(loadUser());
  }, []);

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <>
      {loggedIn ? (
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <Authentication />
      )}
    </>
  );
};

export default Navigation;
