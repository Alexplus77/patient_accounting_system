import React from "react";
import { TableListPatients } from "components/TableListPatients";
import { useSelector } from "react-redux";
import { Modal } from "antd";

const AdministratorPage = () => {
  const { errors } = useSelector((state) => state.storeReducer);

  return (
    <div className="container-administratorPage">
      <div>
        <TableListPatients />
      </div>
    </div>
  );
};

export { AdministratorPage };
