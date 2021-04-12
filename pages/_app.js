import React from "react";
import Head from "next/head";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Starter Kit</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
        <Component {...pageProps} />
    </React.Fragment>
  );
}
