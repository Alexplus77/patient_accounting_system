import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPatientList } from "redux/middlewares/fetchGetPatientList";
import { fetchDeletePatient } from "redux/middlewares/fetchDeletePatient";
import { Table, Typography } from "antd";
import { titleTablePatient } from "commonsFiles/titleTablePatient";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./TableListPatient.css";
import { Link } from "react-router-dom";

const TableListPatients = () => {
  const dispatch = useDispatch();
  const { patientList, selectedPatient } = useSelector(
    (state) => state.storeReducer
  );

  useEffect(() => {
    dispatch(fetchGetPatientList());
  }, [selectedPatient]);

  const handleRemovePatient = (id) => {
    dispatch(fetchDeletePatient(id));
  };
  const columns = [
    {
      title: "Личные данные",
      children: [
        {
          title: "Фамилия",
          render: (text, { personData }) => (
            <Link to={`/patientCard${text.id}`}>{personData.lastName}</Link>
          ),
        },
        {
          title: "Имя",
          render: (text, { personData }) => <i>{personData.name}</i>,
        },
        {
          title: "Отчество",
          render: (text, { personData }) => (
            <i>{personData.patronymic || "Не указано"}</i>
          ),
        },
        {
          title: "Год рождения",
          render: (text, { personData }) => (
            <i>{personData.dateOfBirth || "Не указано"}</i>
          ),
        },
      ],
    },
    {
      title: "Адресс",
      children: [
        {
          title: "Город",
          render: (text, { addressData }) => (
            <i>{addressData.city || "Не указано"}</i>
          ),
        },
        {
          title: "Улица",
          render: (text, { addressData }) => (
            <i>{addressData.street || "Не указано"}</i>
          ),
        },
        {
          title: "Номер",
          render: (text, { addressData }) => (
            <i>{addressData.numberHouse || "Не указано"}</i>
          ),
        },
      ],
    },
    {
      title: "Врач",
      render: (text, { personData }) => (
        <i>{personData.doctor || "Не указано"}</i>
      ),
    },

    {
      title: "Действия",
      key: "actions",
      render: (text, record) => (
        <div className="icon-group">
          <DeleteOutlined
            onClick={() => handleRemovePatient(record.id)}
            className="icon"
          />
          <EditOutlined className="icon" />
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
