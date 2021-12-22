import React from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Authentication from "./pages/Authentication";

const App = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <>
      {loggedIn ? (
        <div>
          <NavBar />
          <Navigation />
          <Footer />
        </div>
      ) : (
        <Authentication />
      )}
    </>
  );
};

export default App;
