import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateLogin } from "../store/auth";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = (props) => {
  const setHasAccount = props.setHasAccount;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(authenticateLogin(email, password));
  };

  return (
    <Box className="flex-start-col" sx={{ p: 2, width: "100%" }}>
      <Box sx={{ width: "100%", my: 1 }}>
        <Typography>Email address</Typography>
        <TextField
          fullWidth
          size="small"
          name="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
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
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          sx={{ bgcolor: "white" }}
        />
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Button
          sx={{ width: "100%", my: 1 }}
          variant="contained"
          size="large"
          onClick={handleSubmit}
        >
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
