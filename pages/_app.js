import React from "react";
import Layout from "../src/section/Layout";
import "../src/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
