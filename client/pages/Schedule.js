import React from "react";
import ScheduleItem from "../components/ScheduleItem";
import { Box, Typography } from "@mui/material";

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
  ];
  return (
    <Box className="flex-start-col">
      <Box className="flex-start-col" sx={{ my: 2 }}>
        <Typography variant="h4" color="primary">
          CLASS SCHEDULE
        </Typography>
      </Box>
      <Box className="center" sx={{ my: 2, textAlign: "center" }}>
        <Typography variant="h6" color="primary">
          Heather currently teaches at Broadway Dance Center, which offers both
          In-Person and Livestream classes! All class times are listed in
          Eastern Time (New York). You can also view her schedule on the
          Broadway Dance Center website, as well as MindBody.
        </Typography>
      </Box>
      <Box>
        {dummySchedule.map(({ day, time, level, type }) => (
          <ScheduleItem day={day} time={time} level={level} type={type} />
        ))}
      </Box>
    </Box>
  );
};

export default Schedule;
