import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const SignUp = (props) => {
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
        <Typography>First name</Typography>
        <TextField
          fullWidth
          size="small"
          name="firstName"
          sx={{ bgcolor: "white" }}
        />
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Typography>Last name</Typography>
        <TextField
          fullWidth
          size="small"
          name="lastName"
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
        <Typography> Confirm password</Typography>
        <TextField
          fullWidth
          size="small"
          type="password"
          name="confirmPassword"
          sx={{ bgcolor: "white" }}
        />
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Button sx={{ width: "100%", my: 1 }} variant="contained" size="large">
          Sign up
        </Button>
        <Button
          onClick={() => setHasAccount(true)}
          sx={{
            textTransform: "none",
            width: "100%",
          }}
          className="center hover-link"
        >
          Have an account? Sign in here.
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
