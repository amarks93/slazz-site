import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

const ScheduleItem = ({ day, time, level, type }) => {
  return (
    <Paper className="flex-start-col" sx={{ width: "175px", m: 1 }}>
      <Box sx={{ bgcolor: "primary.light", width: "100%", p: 1 }}>
        <Typography align="center">{day.toUpperCase()}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography align="center">{time}</Typography>
        <Typography align="center">{level}</Typography>
        <Typography align="center">{type}</Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Button sx={{ width: "100%" }}>
          <Typography align="center">Sign Up</Typography>
        </Button>
      </Box>
    </Paper>
  );
};

export default ScheduleItem;
