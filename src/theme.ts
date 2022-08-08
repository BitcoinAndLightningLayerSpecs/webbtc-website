import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  palette: {
    text: {
      primary: "#fff",
      secondary: "#F2A900",
    },
    background: {
      default: "#111827",
    },
    primary: {
      main: "#111827",
    },
    secondary: {
      main: "#F2A900",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
