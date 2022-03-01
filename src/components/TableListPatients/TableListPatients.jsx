import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPatientList } from "redux/middlewares/fetchGetPatientList";
import { Table } from "antd";

const TableListPatients = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetPatientList());
  }, []);
  const { patientList } = useSelector((state) => state.storeReducer);
  console.log(patientList);
  return (
    <div>
      <h1>Patient list</h1>
    </div>
  );
};
export { TableListPatients };
