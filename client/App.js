import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./Navigation";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Authentication from "./pages/Authentication";
import { loadUser } from "./store/auth";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

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
