import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import { Header } from "components/Header";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
    </div>
  );
};

export { Layout };
