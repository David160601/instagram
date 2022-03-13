import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface Palette {
    backgroundColor: string;
    borderColor: string;
    greyLetter: string;
  }
  interface PaletteOptions {
    backgroundColor: string;
    borderColor: string;
    greyLetter: string;
  }
  interface BreakpointOverrides {
    mobile: true; // adds the `mobile` breakpoint
  }
}
export const theme = createTheme({
  palette: {
    backgroundColor: "rgba(var(--b3f,250,250,250),1)",
    borderColor: "#dbdbdb",
    greyLetter: "#918E8E",
    primary: {
      main: "#0095f6",
    },
  },
  typography: {
    subtitle1: {
      fontSize: "14px",
    },
    subtitle2: {
      fontSize: "12px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      mobile: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
