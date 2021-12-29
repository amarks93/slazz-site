import React from "react";
import MainCarousel from "../components/MainCarousel";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box className="center" style={{ flexDirection: "column" }}>
      <MainCarousel />
    </Box>
  );
};

export default Home;
