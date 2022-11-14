import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <meta name="emotion-insertion-point" content="" />

        <title>WebBTC - Combine the power of bitcoin with your website!</title>
        <meta
          property="description"
          content="WebBTC - Combine the power of bitcoin with your website!"
        />
        <meta
          property="og:title"
          content="WebBTC - Combine the power of bitcoin with your website!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/social/preview.png`}
        />

        <meta
          name="twitter:title"
          content="WebBTC - Combine the power of bitcoin with your website!"
        />
        <meta
          name="twitter:description"
          content="WebBTC is a set of specifications for web apps and client providers to facilitate communication with Bitcoin & Lightning wallets. It provides a programmatic, permissioned interface for letting web apps send or receive payments and much more."
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}/images/social/preview.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
