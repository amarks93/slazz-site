import React from "react";
import ScheduleItem from "../components/ScheduleItem";
import { Box, Paper, Typography } from "@mui/material";

const Schedule = () => {
  const dummySchedule = [
    {
      day: "Sunday",
      time: "1:00 PM",
      level: "basic",
      type: "in-person",
    },
    {
      day: "Sunday",
      time: "2:30 PM",
      level: "beginner",
      type: "in-person",
    },
    {
      day: "Sunday",
      time: "2:30 PM",
      level: "beginner",
      type: "livestream",
    },
    {
      day: "Tuesday",
      time: "1:15 PM",
      level: "beginner",
      type: "in-person",
    },
    {
      day: "Thursday",
      time: "1:15 PM",
      level: "beginner",
      type: "in-person",
    },
    {
      day: "Thursday",
      time: "1:15 PM",
      level: "beginner",
      type: "livestream",
    },
  ];
  return (
    <Box className="flex-start-col">
      <Box className="flex-start-col" sx={{ my: 2 }}>
        <Typography variant="h4" color="primary">
          CLASS SCHEDULE
        </Typography>
      </Box>
      <Box className="center">
        <img
          src="./images/Heather-Kacy-BDC.jpeg"
          alt="Heather and Kacy Prange at BDC"
          style={{ width: "50%", borderRadius: "5px" }}
        />
      </Box>
      <Box className="center" sx={{ my: 2, width: "50%" }}>
        <Paper sx={{ p: 3 }}>
          <Typography align="center" variant="h6" color="primary">
            Heather currently teaches at Broadway Dance Center, which offers
            both In-Person and Livestream classes! All class times are listed in
            Eastern Time (New York). You can also view her schedule on the
            Broadway Dance Center website, as well as MindBody.
          </Typography>
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        {dummySchedule.map(({ day, time, level, type }) => (
          <ScheduleItem day={day} time={time} level={level} type={type} />
        ))}
      </Box>
    </Box>
  );
};

export default Schedule;
