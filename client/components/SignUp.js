import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateSignUp } from "../store/auth";
import { Box, Button, TextField, Typography } from "@mui/material";

const SignUp = (props) => {
  const setHasAccount = props.setHasAccount;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordCopy, setPasswordCopy] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(authenticateSignUp(email, firstName, lastName, password));
  };

  let isDisabled =
    [email, password, firstName, lastName, passwordCopy].some(
      (field) => field === ""
    ) || password !== passwordCopy;

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
        <Typography>First name</Typography>
        <TextField
          fullWidth
          size="small"
          name="firstName"
          value={firstName}
          onChange={(evt) => setFirstName(evt.target.value)}
          sx={{ bgcolor: "white" }}
        />
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Typography>Last name</Typography>
        <TextField
          fullWidth
          size="small"
          name="lastName"
          value={lastName}
          onChangeCapture={(evt) => setLastName(evt.target.value)}
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
        <Typography>Confirm password</Typography>
        <TextField
          fullWidth
          error={password !== passwordCopy}
          helperText={
            password === passwordCopy ? "" : "Passwords should match."
          }
          size="small"
          type="password"
          name="confirmPassword"
          value={passwordCopy}
          onChange={(evt) => setPasswordCopy(evt.target.value)}
          sx={{ bgcolor: "white" }}
        />
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Button
          sx={{ width: "100%", my: 1 }}
          variant="contained"
          size="large"
          disabled={isDisabled}
          onClick={handleSubmit}
        >
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
