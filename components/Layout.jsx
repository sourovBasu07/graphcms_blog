import React from "react";
import Head from "next/head";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>CMS Blog</title>
        <meta name="description" content="JS Mastery Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
