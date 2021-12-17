import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Box, Container, Paper, Typography } from "@mui/material";

const Form = () => {
  const current = "loginl";
  return (
    <Box
      className="flex-start-col"
      bgcolor="secondary"
      sx={{
        height: "100vh",
        py: 2,
        bgcolor: "secondary.main",
      }}
    >
      <Typography variant="h4" color="primary">
        #slazz
      </Typography>
      <Box sx={{ width: 340 }}>
        <Paper className="flex-start-col" sx={{ my: 2 }}>
          {current === "login" ? <Login /> : <SignUp />}
        </Paper>
      </Box>
    </Box>
  );
};

export default Form;
