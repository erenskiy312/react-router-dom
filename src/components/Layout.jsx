import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>@makers incubator 2023</footer>
    </div>
  );
};

export { Layout };
