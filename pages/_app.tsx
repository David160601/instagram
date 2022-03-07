import React from "react";
import { AppProps } from "next/app";
import "@styles/global.css";
import { Provider } from "react-redux";
import store from "@redux/store";
import { theme } from "src/Theme/index";
import { ThemeProvider } from "@mui/private-theming";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
