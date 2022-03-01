import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <i className="logo">Patient Accounting System</i>
      <NavLink className="nav-link" to={"/administrator"}>
        Список пациентов
      </NavLink>
      <NavLink className="nav-link" to={"/addNewPatient"}>
        Добавить в список пациента
      </NavLink>
    </header>
  );
};

export { Header };
