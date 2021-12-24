import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const name = useSelector((state) => state.auth.firstName);
  return (
    <div className="center" style={{ fontSize: 120, textAlign: "center" }}>
      MERRY CHRISTMAS {name.toUpperCase()}!!!
    </div>
  );
};

export default Home;
