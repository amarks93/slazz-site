import React, { useState } from "react";
import ScheduleItem from "../components/ScheduleItem";
import ClassFilter from "../components/ClassFilter";
import Header from "../components/Header";
import { Box, Paper, Typography } from "@mui/material";

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

const Schedule = () => {
  return (
    <Box>
      <Header header={"schedule"} />
      {/* <Box
        className="flex-start-col"
        // need to figure out flexGrow situation
        sx={{ flexGrow: 1, alignItems: "flex-end" }}
      >
        <img
          src="./images/Heather-Kacy-BDC.jpeg"
          alt="Heather and Kacy Prange at BDC"
          style={{ borderRadius: "5px", width: "100%" }}
        />
        <Paper sx={{ width: "100%", p: 3, mt: 3 }}>
          <Typography align="center" variant="h6" color="primary">
            Heather currently teaches at Broadway Dance Center, which offers
            both In-Person and Livestream classes! All class times are listed in
            Eastern Time (New York). You can also view her schedule on the
            Broadway Dance Center website, as well as MindBody.
          </Typography>
        </Paper>
      </Box> */}
      <Box className="flex-start-col" sx={{ p: 3 }}>
        <Box className="space-between-row">
          <Typography align="center" variant="h4" color="primary">
            Weekly Classes
          </Typography>
          <ClassFilter />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            width: "100%",
            mt: 2,
          }}
        >
          {dummySchedule.map(({ day, time, level, type }) => (
            <ScheduleItem day={day} time={time} level={level} type={type} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Schedule;
