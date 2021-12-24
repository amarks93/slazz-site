import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { Box, Paper, Typography } from "@mui/material";

const Authentication = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <Box
      className="flex-start-col"
      bgcolor="secondary"
      sx={{
        height: "100vh",
        py: 6,
        bgcolor: "secondary.main",
      }}
    >
      <img src="./images/Britney-Strong.png" style={{ width: "50px" }} />
      <Typography variant="h4" color="primary">
        #slazz
      </Typography>
      <Box sx={{ width: 340 }}>
        <Paper className="flex-start-col" sx={{ my: 2 }}>
          {hasAccount ? (
            <Login setHasAccount={setHasAccount} />
          ) : (
            <SignUp setHasAccount={setHasAccount} />
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default Authentication;
