import Head from "next/head";
import React from "react";

function SiteHead({ title = "Testing" }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/web/logo.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Outfit:wght@400;500;600;700&display=swap" 
            rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inria+Sans&family=Inter:wght@400;600;700&family=Outfit:wght@400;500;600;700&display=swap" 
            rel="stylesheet" />

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
