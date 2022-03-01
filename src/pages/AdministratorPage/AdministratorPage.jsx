import React from "react";
import { FormAddPatient } from "components/FormAddPatient";
import { TableListPatients } from "components/TableListPatients";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { Link } from "react-router-dom";

const AdministratorPage = () => {
  const { isAddPatient } = useSelector((state) => state.storeReducer);
  return (
    <div className="container-administratorPage">
      <div>
        <TableListPatients />
      </div>
    </div>
  );
};

export { AdministratorPage };
