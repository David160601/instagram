import React from "react";
import { AppProps } from "next/app";
import "@styles/global.css";
import { Provider } from "react-redux";
import { store, persistor } from "@redux/store";
import { theme } from "src/Theme/index";
import { ThemeProvider } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
