import React from "react";
import Header from "../Header";
import Navigator from "../Navbar/Navigation";

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <Navigator />
      <main>{props.children}</main>
    </div>
  );
}
