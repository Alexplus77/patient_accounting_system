import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./HeaderSuperAdministrator.css";
import { AuthUserCard } from "components/AuthUserCard";
import { exit_edit_mode } from "redux/actions/createActions";
import { useDispatch } from "react-redux";
import { Menu, Button, Dropdown } from "antd";

const HeaderSuperAdministrator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSelectStuff = () => {
    dispatch(exit_edit_mode());
  };
  const menuList = (
    <Menu className="menu-header">
      <Menu.Item className="nav-link">
        <NavLink key={1} onClick={handleSelectStuff} to={"/addNewDoctor"}>
          Добавить врача
        </NavLink>
      </Menu.Item>
      <Menu.Item className="nav-link">
        <NavLink
          key={2}
          onClick={handleSelectStuff}
          to={"/addNewAdministrator"}
        >
          Добавить администратора
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="container-header-administrator">
      <NavLink className="nav-link" to={"/superAdministrator"}>
        Список персонала
      </NavLink>
      <Dropdown className="nav-link" overlay={menuList}>
        <div>Добавить в список</div>
      </Dropdown>
      <AuthUserCard />
    </div>
  );
};
export { HeaderSuperAdministrator };
