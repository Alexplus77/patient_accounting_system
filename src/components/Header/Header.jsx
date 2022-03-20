import React from "react";
import "./Header.css";
import { HeaderAdministrator } from "components/HeaderAdministrator";
import { HeaderSuperAdministrator } from "components/HeaderSuperAdministrator";
import { useSelector } from "react-redux";

const Header = () => {
  const {
    authUser: { role },
  } = useSelector((state) => state?.stuffReducer);

  return (
    <header className="header-container">
      <i className="logo">Patient Accounting System</i>
      {role === "admin" && <HeaderAdministrator />}
      {role === "superAdmin" && <HeaderSuperAdministrator />}
    </header>
  );
};

export { Header };
