import React, { useState } from "react";
import { Button, Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { is_form_visible } from "redux/actions/createActions";
import { FormPatientsMedicalCart } from "components/Forms/FormPatientsMedicalCart";
import "./TablePatientsMedicalCart.css";
import { NoteMedicalCard } from "components/NoteMedicalCard";

export const TablePatientsMedicalCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [note, setNote] = useState({});
  const [isNoteVisible, setNoteVisible] = useState(false);
  const {
    selectedPatient: { patientsMedicalCart },
  } = useSelector((state) => state?.storeReducer);
  //console.log(patientsMedicalCart);
  const columns = [
    {
      title: "Дата осмотра",
      key: "Date",
      render: (record) => (
        <i>{format(new Date(record.date), "dd.MM.yy hh.mm")}</i>
      ),
    },
    {
      title: "Запись специалиста",
      key: "Note",
      render: (record) => (
        <i
          style={{ cursor: "pointer" }}
          onClick={() => {
            setNoteVisible(true);
            setNote(record);
          }}
        >
          Посмотреть запись
        </i>
      ),
    },
    {
      title: "Ф.И.О. специалиста",
      key: "name",
      render: ({
        doctorId: {
          doctorPersonalData: { personData },
        },
      }) => (
        <i>
          {personData.lastName} {personData.name[0].toUpperCase()}.
          {personData.patronymic && personData.patronymic[0].toUpperCase()}
        </i>
      ),
    },
    {
      title: "Специальность",
      key: "specialization",
      render: ({
        doctorId: {
          doctorPersonalData: { personData },
        },
      }) => <i>{personData.specialization}</i>,
    },
  ];
  return (
    <div className="table-medicalPatientCart-container">
      <div className="table-medicalCart">
        <Table
          columns={columns}
          style={{ width: "fit-content", justifySelf: "center" }}
          rowClassName="rowTable-list"
          pagination={{ defaultPageSize: 5 }}
          rowKey={(record) => record._id}
          dataSource={patientsMedicalCart}
        />
        <div className="btn-group-tableMedicalCart">
          <Button onClick={() => navigate(-1)} className="btn ">
            Назад
          </Button>
          <Button
            onClick={() => {
              dispatch(is_form_visible(true));
              setNote({});
            }}
            className="btn "
          >
            Сделать новую запись
          </Button>
        </div>
      </div>
      <NoteMedicalCard
        note={note}
        isNoteVisible={isNoteVisible}
        setNoteVisible={setNoteVisible}
      />
      <FormPatientsMedicalCart />
    </div>
  );
};
