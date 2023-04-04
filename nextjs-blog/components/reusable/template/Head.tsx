import Head from 'next/head'
import React from "react";
function SiteHead({title = 'AEEA'}) {
  return (
    <Head>
      <title>AEEA</title>
      <link rel="icon" href="/logo.png"/>
    </Head>
  )
}

export default SiteHead
