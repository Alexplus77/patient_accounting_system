import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPatientList } from "redux/middlewares/fetchGetPatientList";
import { Table, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./TableListPatient.css";

const TableListPatients = () => {
  const dispatch = useDispatch();
  const { patientList } = useSelector((state) => state.storeReducer);
  useEffect(() => {
    dispatch(fetchGetPatientList());
  }, []);

  const columns = [
    {
      title: "Фамилия",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Отчество",
      dataIndex: "patronymic",
      key: "patronymic",
    },
    {
      title: "Дата рождения",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Номер телефона",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Адрес",
      key: "address",
      dataIndex: "city",
    },
    {
      title: "Записан к врачу",
      dataIndex: "doctor",
      key: "doctor",
    },
    {
      title: "Действия",
      key: "actions",
      render: () => (
        <div className="icon-group">
          <DeleteOutlined className="icon-delete" />
          <EditOutlined className="icon-delete" />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="table-container">
        <Typography.Title level={2}>
          <i className="title-table">Список пациентов</i>
        </Typography.Title>
        <Table
          style={{ width: "1100px" }}
          dataSource={patientList.map((el) => {
            return { ...el.patientPersonalData, id: el._id };
          })}
          columns={columns}
          rowKey={(record) => record.id}
        />
      </div>
    </div>
  );
};
export { TableListPatients };
