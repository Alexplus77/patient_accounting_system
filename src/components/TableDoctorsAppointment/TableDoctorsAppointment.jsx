import React, { useEffect } from "react";
import { Table } from "antd";
import "./TableDoctorsAppointment.css";
import "../TableListPatients/TableListPatient.css";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const TableDoctorsAppointment = () => {
  const { doctorsAppointmentList } = useSelector(
    (state) => state?.storeReducer
  );

  const columns = [
    {
      title: "Фамилия",
      key: "Фамилия",
      render: ({
        patientData: {
          patientPersonalData: { personData },
          _id,
        },
      }) => <Link to={`/medicalCardId${_id}`}>{personData.lastName}</Link>,
    },
    {
      title: "Имя",
      key: "Имя",
      render: ({
        patientData: {
          patientPersonalData: { personData },
        },
      }) => <i>{personData.name}</i>,
    },
    {
      title: "Отчество",
      key: "Отчество",
      render: ({
        patientData: {
          patientPersonalData: { personData },
        },
      }) => <i>{personData.patronymic || "Не указано"}</i>,
    },
    {
      title: "Время приема",
      key: "Дата",

      render: ({ dateAppointment }) => (
        <i>{format(new Date(dateAppointment), "dd.MM.yy hh.mm")}</i>
      ),
    },
  ];
  return (
    <div className="container-doctors-appointment">
      <Table
        title={() => (
          <b style={{ fontSize: "20px", marginLeft: "25%" }}>
            Ваш список пациентов
          </b>
        )}
        pagination={{ defaultPageSize: 5 }}
        rowClassName="rowTable-list"
        columns={columns}
        dataSource={doctorsAppointmentList}
        rowKey={(record) => record._id}
      />
    </div>
  );
};

export { TableDoctorsAppointment };
