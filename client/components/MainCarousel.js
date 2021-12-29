import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button } from "@mui/material";

const MainCarousel = () => {
  return (
    <Box className="flex-start-col" sx={{ my: 2 }}>
      <Carousel
        className="flex-start-col"
        style={{ height: "auto" }}
        autoPlay={false}
      >
        <Box className="center">
          <img
            src="./images/Carousel/Heather-Rigg-Beg-Jazz-Banner.jpeg"
            alt="Beginner Jazz Banner"
            className="main-carousel-image"
          />
        </Box>
        <Box className="center">
          <img
            src="./images/Carousel/Absolute-Beginner-Workshop-Thumbnail.jpeg"
            alt="Absolute Beginner Workshop"
            className="main-carousel-image"
          />
        </Box>
      </Carousel>
    </Box>
  );
};

export default MainCarousel;
