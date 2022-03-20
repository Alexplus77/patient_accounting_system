import { Table, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TableListDoctors.css";
import { fetchGetDoctorsList } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchDoctorDB/fetchGetDoctorsList";
import { useColumnsTableListDoctors } from "commonsFiles/columnsForTables/columnsTableListDoctors";

export const TableListDoctors = () => {
  const { doctorsList, selectStaff } = useSelector(
    (state) => state.stuffReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetDoctorsList());
  }, [selectStaff]);

  return (
    <div className="container-table-doctorList">
      <Typography.Title
        level={2}
        style={{ color: "white", textAlign: "center" }}
      >
        Список врачей
      </Typography.Title>
      <Table
        rowClassName="rowTable-list"
        pagination={{ defaultPageSize: 5 }}
        dataSource={doctorsList.map((el) => {
          return { ...el.doctorPersonalData, id: el._id };
        })}
        style={{ width: "550px" }}
        columns={useColumnsTableListDoctors()}
        rowKey={(record) => record.id}
      />
    </div>
  );
};
