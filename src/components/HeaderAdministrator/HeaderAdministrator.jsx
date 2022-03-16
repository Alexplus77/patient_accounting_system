import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderAdministrator.css";

const HeaderAdministrator = () => {
  return (
    <div className="container-header-administrator">
      <NavLink className="nav-link" to={"/administrator"}>
        Список пациентов
      </NavLink>
      <NavLink className="nav-link" to={"/addNewPatient"}>
        Добавить в список пациента
      </NavLink>
    </div>
  );
};
export { HeaderAdministrator };
