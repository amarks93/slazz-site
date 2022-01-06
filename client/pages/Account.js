import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Divider, Typography } from "@mui/material";

const Account = () => {
  const { email, firstName, lastName } = useSelector((state) => state.auth);
  console.log(email, firstName);
  return (
    <Box>
      <Box className="center" sx={{ my: 2 }}>
        <Typography variant="h5" color="primary">
          account settings
        </Typography>
      </Box>
      <Divider variant="middle" />
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
            backgroundColor: "yellow",
          }}
        >
          <Typography variant="h3" color="primary">
            Left Box 1
          </Typography>
          <Typography variant="h3" color="primary">
            Left Box 2
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "flex-start",
            flexGrow: { md: 2 },
            backgroundColor: "orange",
          }}
        >
          <Typography variant="h3" color="primary">
            Right Box 1
          </Typography>
          <Typography variant="h3" color="primary">
            Right Box 2
          </Typography>
          <Typography variant="h3" color="primary">
            Right Box 3
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
