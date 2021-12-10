import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EC407A",
      light: "#F48FB1",
      dark: "#D81B60",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#EC407A",
    },
  },
  typography: {
    fontFamily: ["Arial"].join(","),
  },
});

ReactDOM.render(
  <Router location={history.location} navigator={history}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
