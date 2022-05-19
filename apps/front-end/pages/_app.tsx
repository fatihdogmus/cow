import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.scss";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils/create-emotion-cache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { Layout } from "../layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "@cow/front-end/store";
import InitialLoadComponent from "../configuration/InitialLoadComponent";

axios.defaults.baseURL = "/api/";
const clientSideEmotionCache = createEmotionCache();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>Cow</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
            <InitialLoadComponent />
          </Layout>
        </Provider>

        <ToastContainer theme="colored" pauseOnFocusLoss={false} draggable={false} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default CustomApp;
