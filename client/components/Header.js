import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Header = ({ header }) => {
  return (
    <>
      <Box className="center" sx={{ m: 2 }}>
        <Typography variant="h5" color="primary">
          {header}
        </Typography>
      </Box>
      <Divider variant="middle" sx={{ backgroundColor: "primary.main" }} />
    </>
  );
};

export default Header;
