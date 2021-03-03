import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F7CA21",
    },
    secondary: {
      main: "#F05430",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
