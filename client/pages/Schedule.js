import React, { useState } from "react";
import ScheduleItem from "../components/ScheduleItem";
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
  const [days, setDays] = useState("all");
  const [level, setLevel] = useState("all");
  const [type, setType] = useState("all");

  return (
    <Box>
      <Header header={"class schedule"} />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box className="flex-start-col" sx={{ width: "60%", p: 3 }}>
          <img
            src="./images/Heather-Kacy-BDC.jpeg"
            alt="Heather and Kacy Prange at BDC"
            style={{ borderRadius: "5px", width: "100%" }}
          />
          <Paper sx={{ width: "100%", p: 3, mt: 3 }}>
            <Typography align="center" variant="h6" color="primary">
              Heather currently teaches at Broadway Dance Center, which offers
              both In-Person and Livestream classes! All class times are listed
              in Eastern Time (New York). You can also view her schedule on the
              Broadway Dance Center website, as well as MindBody.
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "40%",
            pt: 3,
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
