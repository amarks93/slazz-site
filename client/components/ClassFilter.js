import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const classDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const classLevels = ["basic", "beginner"];

const classTypes = ["in-person", "livestream"];

const ClassFilter = () => {
  const [days, setDays] = useState([]);
  const [levels, setLevels] = useState([]);
  const [types, setTypes] = useState([]);

  const handleChange = () => console.log("in the handle change");

  return (
    <Box>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="class-day-filter-label">Day</InputLabel>
        <Select
          labelId="class-day-filter-label"
          id="class-day-filter"
          multiple
          value={days}
          onChange={handleChange}
          input={<OutlinedInput label="Day" />}
          renderValue={(selected) => selected.join(", ")}
        >
          {classDays.map((classDay) => (
            <MenuItem key={classDay} value={classDay}>
              <Checkbox checked={days.indexOf(classDay) > -1} />
              <ListItemText primary={classDay} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="level-filter-label">Level</InputLabel>
        <Select
          labelId="level-filter-label"
          id="level-filter"
          multiple
          value={levels}
          onChange={handleChange}
          input={<OutlinedInput label="Level" />}
          renderValue={(selected) => selected.join(", ")}
        >
          {classLevels.map((classLevel) => (
            <MenuItem key={classLevel} value={classLevel}>
              <Checkbox checked={levels.indexOf(classLevel) > -1} />
              <ListItemText primary={classLevel} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="type-filter-label">Type</InputLabel>
        <Select
          labelId="type-filter-label"
          id="type-filter"
          multiple
          value={types}
          onChange={handleChange}
          input={<OutlinedInput label="Type" />}
          renderValue={(selected) => selected.join(", ")}
        >
          {classTypes.map((classType) => (
            <MenuItem key={classType} value={classType}>
              <Checkbox checked={types.indexOf(classType) > -1} />
              <ListItemText primary={classType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ClassFilter;
