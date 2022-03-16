import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./HeaderSuperAdministrator.css";
import { add_selected_stuff } from "redux/actions/createActions";
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
        <NavLink onClick={handleSelectStuff} to={"/addNewDoctor"}>
          Добавить врача
        </NavLink>
      </Menu.Item>
      <Menu.Item className="nav-link">
        <NavLink onClick={handleSelectStuff} to={"/addNewAdministrator"}>
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
        <div>Добавить в список персонала</div>
      </Dropdown>
    </div>
  );
};
export { HeaderSuperAdministrator };
