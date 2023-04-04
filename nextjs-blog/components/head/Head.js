import Head from "next/head";
import React from "react";

function SiteHead({ title = "Testing" }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/web/logo.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
        type="text/css"
      />
      <link
        rel="preload"
        href="/fonts/Roboto-Medium.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
  );
}

export default SiteHead;
