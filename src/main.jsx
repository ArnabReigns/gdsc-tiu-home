import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const THEME = createTheme({
  typography: {
    fontFamily: "google-sans",
  },
  palette: {
    primary: {
      main: "#4086F4",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: "initial",
        },
        text: {
          textTransform: "initial",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
