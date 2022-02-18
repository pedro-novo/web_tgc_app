import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import { orange, red } from "@mui/material/colors";
import Layout from "../components/Layout";
import "@fontsource/poppins";
import { DataContextProvider } from "../components/context/DataContext";
import { AuthContextProvider } from "../components/context/AuthContext";
import { CartContextProvider } from "../components/context/CartContext";
import { DisplayOptionsProvider } from "../components/context/DisplayOptions";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: red,
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>The Gyms Collectors</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <AuthContextProvider>
        <DataContextProvider>
          <DisplayOptionsProvider>
            <CartContextProvider>
              <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
            </CartContextProvider>
          </DisplayOptionsProvider>
        </DataContextProvider>
      </AuthContextProvider>
    </CacheProvider>
  );
}
