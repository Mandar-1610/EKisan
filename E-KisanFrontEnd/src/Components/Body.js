import React from "react";
import Navbar from "./Navbar";

export default function Body(props) {
  return (
    <>
      <Navbar title="E-Kisaan" about="About us" />
      {props.children}
    </>
  );
}
