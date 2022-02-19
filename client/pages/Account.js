import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateUserThunk } from "../store/auth";
import ChangePassword from "../components/ChangePassword";

import Header from "../components/Header";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Account = () => {
  const { email, firstName, lastName } = useSelector((state) => state.auth);

  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedFirstName, setUpdatedFirstName] = useState(firstName);
  const [updatedLastName, setUpdatedLastName] = useState(lastName);

  const dispatch = useDispatch();
  const handleSubmit = () =>
    dispatch(updateUserThunk(updatedEmail, updatedFirstName, updatedLastName));

  let isDisabled;
  email === updatedEmail &&
  firstName === updatedFirstName &&
  lastName === updatedLastName
    ? (isDisabled = true)
    : (isDisabled = false);

  return (
    <Box>
      <Header header={"account"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "flex-start", md: "center" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-end" },
            justifyContent: "flex-start",
            flexGrow: { md: 1 },
            m: 2,
          }}
        >
          <Avatar
            src="invalidurltest.com"
            alt={firstName}
            sx={{
              backgroundColor: "primary.main",
              height: 150,
              width: 150,
              fontSize: "3rem",
            }}
          ></Avatar>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "flex-start",
            flexGrow: { md: 1 },
            m: 2,
          }}
        >
          <Box sx={{ width: { xs: 450, sm: 500 } }}>
            <Paper className="flex-start-col">
              <Box className="flex-start-col" sx={{ p: 2, width: "100%" }}>
                <Box sx={{ width: "100%", my: 1 }}>
                  <Typography>Email address</Typography>
                  <TextField
                    fullWidth
                    size="small"
                    name="email"
                    value={updatedEmail}
                    onChange={(evt) => setUpdatedEmail(evt.target.value)}
                    sx={{ bgcolor: "white" }}
                  />
                </Box>
                <Box sx={{ width: "100%", my: 1 }}>
                  <Typography>First name</Typography>
                  <TextField
                    fullWidth
                    size="small"
                    name="firstName"
                    value={updatedFirstName}
                    onChange={(evt) => setUpdatedFirstName(evt.target.value)}
                    sx={{ bgcolor: "white" }}
                  />
                </Box>
                <Box sx={{ width: "100%", my: 1 }}>
                  <Typography>Last name</Typography>
                  <TextField
                    fullWidth
                    size="small"
                    name="lastName"
                    value={updatedLastName}
                    onChange={(evt) => setUpdatedLastName(evt.target.value)}
                    sx={{ bgcolor: "white" }}
                  />
                </Box>
                <ChangePassword />
                <Box sx={{ width: "100%", my: 1 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ width: "100%" }}
                    disabled={isDisabled}
                    onClick={handleSubmit}
                  >
                    Update account
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
