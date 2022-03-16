import React from "react";
import "./SuperAdministratorPage.css";
import { TableListDoctors } from "components/TableListDoctors";
import { TableListAdministrators } from "components/TableListAdministrators";

const SuperAdministratorPage = () => {
  return (
    <div className="container-superAdmin-page">
      <TableListDoctors />
      <TableListAdministrators />
    </div>
  );
};
export { SuperAdministratorPage };
