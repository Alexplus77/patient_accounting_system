import { Link, useNavigate } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import { fetchDeletePatient } from "redux/middlewares/fetchDeletePatient";
import { fetchPatientById } from "redux/middlewares/fetchPatientById";
import { on_edit_mode } from "redux/actions/createActions";
import { useDispatch, useSelector } from "react-redux";
import { format, parse } from "date-fns";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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
    navigate(`/patientEdit${id}`);
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
          filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
          }) => {
            return (
              <>
                <Input
                  autoFocus
                  onChange={(e) => {
                    setSelectedKeys(e.target.value ? [e.target.value] : []);
                    confirm();
                  }}
                  value={selectedKeys[0]}
                  onPressEnter={() => {
                    confirm();
                  }}
                  placeholder={"Поиск"}
                />
                <Button onClick={() => clearFilters()}>Clear</Button>
              </>
            );
          },
          filterIcon: () => {
            return <SearchOutlined style={{ fontSize: "20px" }} />;
          },
          onFilter: (value, record) => {
            return [...record.personData.lastName.toLowerCase()]
              .slice(0, value.length)
              .includes(value.toLowerCase());
          },
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
