import { Link, useNavigate } from "react-router-dom";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Tooltip, Popconfirm } from "antd";
import React from "react";
import { fetchDeletePatient } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchDeletePatient";
import { fetchPatientById } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchPatientById";
import {
  fetch_selected_patient,
  on_edit_mode,
} from "redux/actions/createActions";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { propsFilterLastName } from "components/FilterDropDown/propsFilterLastName";
import "components/TableListPatients/TableListPatient.css";
import { propsFilterName } from "components/FilterDropDown/propsFilterName";
import { propsFilterAddress } from "components/FilterDropDown/propsFilterAddress";
import "../../components/TableListPatients/TableListPatient.css";
import { is_form_visible } from "redux/actions/createActions";

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

  const handleDoctorsAppointment = (data) => {
    dispatch(fetch_selected_patient(data));
    dispatch(is_form_visible(true));
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
      title: "Адрес",
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
      title: "Запись к врачу",
      render: (text, record) => {
        return (
          <div className="icon-group">
            <Tooltip title={"Записать к врачу"}>
              <EditTwoTone
                className="icon"
                onClick={() => handleDoctorsAppointment(record)}
              />
            </Tooltip>
          </div>
        );
      },
    },

    {
      title: "Действия",
      key: "actions",
      render: (text, record) => (
        <div className="icon-group">
          <Tooltip title={"Удалить"}>
            <Popconfirm
              title={"Вы уверены, что хотите удалить пациента?"}
              onConfirm={() => handleRemovePatient(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <DeleteTwoTone twoToneColor="red" className="icon" />
            </Popconfirm>
          </Tooltip>
          <Tooltip title={"Редактировать"}>
            <EditTwoTone
              className="icon"
              onClick={() => handleOnEditMode(record.id)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];
};
