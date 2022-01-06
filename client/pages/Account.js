import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Avatar,
  Box,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Account = () => {
  const { email, firstName, lastName } = useSelector((state) => state.auth);
  console.log(email, firstName);
  return (
    <Box>
      <Box className="center" sx={{ m: 2 }}>
        <Typography variant="h5" color="primary">
          account settings
        </Typography>
      </Box>
      <Divider variant="middle" sx={{ backgroundColor: "primary.main" }} />
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
          <Box sx={{ width: 500 }}>
            <Paper className="flex-start-col">
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
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
