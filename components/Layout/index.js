import React from "react";
import Copyright from "../Copyright/Copyright";
import HeaderNav from "../Layout/Header/Header";

const index = ({ children }) => {
  return (
    <>
      <HeaderNav></HeaderNav>
      <main>{children}</main>
      <Copyright></Copyright>
    </>
  );
};

export default index;
