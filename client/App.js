import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navigation from "./Navigation";

const withRouter = () => {
  const App = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Navigation router={{ location, navigate, params }} />;
  };
  return <App />;
};

export default withRouter;
