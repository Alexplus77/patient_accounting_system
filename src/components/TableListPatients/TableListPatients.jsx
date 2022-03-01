import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPatientList } from "redux/middlewares/fetchGetPatientList";
import { Table } from "antd";

const TableListPatients = () => {
  const dispatch = useDispatch();
  const { patientList } = useSelector((state) => state.storeReducer);
  useEffect(() => {
    dispatch(fetchGetPatientList());
  }, []);

  console.log(patientList);
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
      dataIndex: "city",
      key: "city",
    },
  ];
  console.log(
    patientList.map((el) => {
      return { ...el.patientPersonalData, id: el._id };
    })
  );
  return (
    <div>
      <h1>Patient list</h1>
      <Table
        style={{ width: "800px" }}
        dataSource={patientList.map((el) => {
          return { ...el.patientPersonalData, id: el._id };
        })}
        columns={columns}
        rowKey={"id"}
      />
    </div>
  );
};
export { TableListPatients };
