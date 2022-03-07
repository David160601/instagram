import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface Palette {
    backgroundColor: string;
  }
  interface PaletteOptions {
    backgroundColor: string;
  }
}
export const theme = createTheme({
  palette: {
    backgroundColor: "rgba(var(--b3f,250,250,250),1)",
    primary: {
      main: "#0095f6",
    },
  },
});
