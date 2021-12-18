import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = (props) => {
  const setHasAccount = props.setHasAccount;
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
        <Button
          onClick={() => setHasAccount(false)}
          sx={{
            textTransform: "none",
            width: "100%",
          }}
          className="center hover-link"
        >
          New to #slazz? Create an account.
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
