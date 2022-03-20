import { Table, Typography } from "antd";
import React, { useEffect } from "react";
import "./TableListAdministrators.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAdministratorsList } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchAdministratorDB/fetchGetAdministratorsList";
import { useColumnsTableListAdministrators } from "commonsFiles/columnsForTables/columnsTableListAdministrator";

export const TableListAdministrators = () => {
  const { administratorsList, selectStaff } = useSelector(
    (state) => state.stuffReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAdministratorsList());
  }, [selectStaff]);
  return (
    <div className="container-table-doctorList">
      <Typography.Title
        level={2}
        style={{ color: "white", textAlign: "center" }}
      >
        Список администраторов
      </Typography.Title>
      <Table
        rowClassName="rowTable-list"
        pagination={{ defaultPageSize: 5 }}
        dataSource={administratorsList.map((el) => {
          return { ...el.administratorPersonalData, id: el._id };
        })}
        style={{ width: "550px" }}
        columns={useColumnsTableListAdministrators()}
        rowKey={(record) => record.id}
      />
    </div>
  );
};
