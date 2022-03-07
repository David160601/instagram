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
});
