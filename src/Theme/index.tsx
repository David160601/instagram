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
    backgroundColor: "#FAFAFA",
  },
});
