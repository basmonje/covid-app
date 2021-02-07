import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
