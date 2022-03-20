import React, { useEffect } from "react";
import "./SuperAdministratorPage.css";
import { TableListDoctors } from "components/TableListDoctors";
import { TableListAdministrators } from "components/TableListAdministrators";
import { fetchVerifyAuthUser } from "redux/middlewares/fetchVerifyAuthUser";
import { useDispatch } from "react-redux";

const SuperAdministratorPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVerifyAuthUser());
  }, []);
  return (
    <div className="container-superAdmin-page">
      <TableListDoctors />
      <TableListAdministrators />
    </div>
  );
};
export { SuperAdministratorPage };
