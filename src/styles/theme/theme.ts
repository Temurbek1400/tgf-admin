import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    primary: {
      dark: " #4340DA",
      main: "#00B2F5",
      contrastText: "#FFFFFF",
    },

    error: {
      main: "#E72F2F",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#FFFFFF",
      contrastText: "#0000001A",
    },
    background: {
      default: "#F6F6F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
      disabled: "#FFFFFF",
    },
    grey: {
      500: "#0000001A",
      600: "rgba(0, 0, 0, 0.1)",
      700: "#858997",
      800: "#8992A9;"
    },
    divider: "#00B2F5",

    // action: {
    //   hover: "#00B2F5",
    // },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          "&:MuiInput-root": {
            padding: "10px",
          },
          "&:before": {
            border: "1px solid yellow",
          },
          "&:after": {
            borderBottom: "none",
          },
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 4px 12px rgba(101, 171, 231, 0.12)",
    "0px 0px 16px rgba(0, 178, 245, 0.2)",
    "0px 0px 8px rgba(0, 178, 245, 0.16)",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
  shape: {
    borderRadius: 24,
  },
});
