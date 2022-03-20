import React, { useEffect } from "react";
import { TableListPatients } from "components/TableListPatients";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { fetchVerifyAuthUser } from "redux/middlewares/fetchVerifyAuthUser";

const AdministratorPage = () => {
  const dispatch = useDispatch();
  const { errors, patientList } = useSelector((state) => state?.storeReducer);
  useEffect(() => {
    dispatch(fetchVerifyAuthUser());
  }, [patientList]);
  return (
    <div className="container-administratorPage">
      <div>
        <TableListPatients />
      </div>
    </div>
  );
};

export { AdministratorPage };
