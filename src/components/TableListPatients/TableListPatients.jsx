import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPatientList } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchGetPatientList";
import { fetchGetDoctorsList } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchDoctorDB/fetchGetDoctorsList";
import { Table, Typography } from "antd";
import { useColumnsTableListPatients } from "commonsFiles/columnsForTables/columnsTableListPatient";
import "./TableListPatient.css";
import { FormDoctorsAppointment } from "../Forms/FormDoctorsAppointment";

const TableListPatients = () => {
  const dispatch = useDispatch();
  const { patientList, selectedPatient, loading } = useSelector(
    (state) => state?.storeReducer
  );

  useEffect(() => {
    dispatch(fetchGetDoctorsList());
    dispatch(fetchGetPatientList());
  }, [selectedPatient]);

  return (
    <div>
      <div className="table-container">
        <Typography.Title level={2}>
          <i className="title-table">Список пациентов</i>
        </Typography.Title>
        <FormDoctorsAppointment />
        <Table
          loading={loading}
          style={{ width: "1100px" }}
          rowClassName="rowTable-list"
          pagination={{ defaultPageSize: 5 }}
          dataSource={patientList.map((el) => {
            return { ...el.patientPersonalData, id: el._id };
          })}
          columns={useColumnsTableListPatients()}
          rowKey={(record) => record.id}
        />
      </div>
    </div>
  );
};
export { TableListPatients };
