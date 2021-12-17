import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box className="flex-start-col" sx={{ p: 2, width: "100%" }}>
      <Box sx={{ width: "100%", my: 1 }}>
        <Typography>Email address</Typography>
        <TextField
          fullWidth
          size="small"
          name="email"
          sx={{ bgcolor: "white" }}
        />
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Typography>Password</Typography>
        <TextField
          fullWidth
          size="small"
          type="password"
          name="password"
          sx={{ bgcolor: "white" }}
        />
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Button sx={{ width: "100%", my: 1 }} variant="contained" size="large">
          Sign in
        </Button>
        <Typography className="center" color="primary" variant="subtitle2">
          New to #slazz? Create an account.
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
