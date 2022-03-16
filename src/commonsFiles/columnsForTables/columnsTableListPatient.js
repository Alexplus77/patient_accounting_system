import { Link, useNavigate } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import { fetchDeletePatient } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchDeletePatient";
import { fetchPatientById } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchPatientById";
import { on_edit_mode } from "redux/actions/createActions";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { propsFilterLastName } from "components/FilterDropDown/propsFilterLastName";
import "components/TableListPatients/TableListPatient.css";
import { propsFilterName } from "components/FilterDropDown/propsFilterName";
import { propsFilterAddress } from "components/FilterDropDown/propsFilterAddress";

export const useColumnsTableListPatients = () => {
  const { selectedPatient } = useSelector((state) => state.storeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemovePatient = (id) => {
    dispatch(fetchDeletePatient(id));
  };

  const handleOnEditMode = (id) => {
    dispatch(on_edit_mode());
    dispatch(fetchPatientById(id));
    navigate(`/addNewPatient${id}`);
  };

  return [
    {
      title: "Личные данные",
      children: [
        {
          title: <i>Фамилия</i>,
          render: (text, { personData }) => (
            <Link to={`/patientCard${text.id}`}>{personData.lastName}</Link>
          ),
          ...propsFilterLastName,
        },
        {
          title: "Имя",
          render: (text, { personData }) => <i>{personData.name}</i>,
          ...propsFilterName,
        },
        {
          title: "Отчество",
          render: (text, { personData }) => (
            <i>{personData.patronymic || "Не указано"}</i>
          ),
        },
        {
          title: "Год рождения",
          render: (text, { personData }) => {
            return (
              <i>
                {format(new Date(personData.dateOfBirth), "dd.MM.yyyy") ||
                  "Не указано"}
              </i>
            );
          },
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
          ...propsFilterAddress,
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
          <EditOutlined
            className="icon"
            onClick={() => handleOnEditMode(record.id)}
          />
        </div>
      ),
    },
  ];
};
