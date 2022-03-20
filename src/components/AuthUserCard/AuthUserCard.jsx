import React from "react";
import "./AuthUserCard.css";
import { useSelector, useDispatch } from "react-redux";
import { log_out } from "redux/actions/createActions";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const AuthUserCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(log_out());
    navigate("/");
  };
  const data2 = useSelector((state) => state?.stuffReducer);
  const {
    authUser: {
      role,
      dataUser: { name, lastName, patronymic },
    },
  } = useSelector((state) => state?.stuffReducer);
  return (
    <div className="container-authUser">
      <i className="title-authUser">
        {role} {lastName} {name} {patronymic}
      </i>
      <Button onClick={logOut} className="btn">
        Выйти
      </Button>
    </div>
  );
};
