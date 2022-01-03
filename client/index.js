import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";
import App from "./App";
import store from "./store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EC407A",
      light: "#F48FB1",
      dark: "#D81B60",
    },
    secondary: {
      main: "#212121",
      light: "#424242",
      dark: "#000000",
    },
    text: {
      primary: "#212121",
      secondary: "#EC407A",
    },
    background: {
      paper: "#f7f8fa",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
