import React from "react";
import {Outlet} from "react-router-dom";
import {Navbar}  from "./navbar";

export const Layout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;