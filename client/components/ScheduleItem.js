import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ScheduleItem = ({ day, time, level, type }) => {
  return (
    <Box className="center">
      <Box>
        <Typography>{day}</Typography>
      </Box>
      <Box>
        <Typography>{time}</Typography>
      </Box>
      <Box>
        <Typography>{level}</Typography>
      </Box>
      <Box>
        <Typography>{type}</Typography>
      </Box>
      <Box>
        <Button>
          <Typography>Sign Up</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ScheduleItem;
