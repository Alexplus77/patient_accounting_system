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
import "components/TableListPatients/TableListPatient.css";

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
  const onFilterDropDown = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => {
    return (
      <div className={"btns-search"}>
        <Input
          autoFocus
          onChange={(e) => {
            setSelectedKeys(e.target.value.trim() ? [e.target.value] : []);
            confirm({ closeDropdown: false });
          }}
          value={selectedKeys[0]}
          onPressEnter={() => {
            confirm();
          }}
          onBlur={() => {
            confirm();
          }}
          placeholder={"Поиск"}
        />
        <Button danger onClick={() => clearFilters()}>
          Clear
        </Button>
      </div>
    );
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
          }) =>
            onFilterDropDown({
              setSelectedKeys,
              selectedKeys,
              confirm,
              clearFilters,
            }),
          filterIcon: () => {
            return <SearchOutlined style={{ fontSize: "20px" }} />;
          },
          onFilter: (value, record) => {
            return (
              value &&
              [...record.personData.lastName.toLowerCase()]
                .slice(0, value.length)
                .includes(value.toLowerCase())
            );
          },
        },
        {
          title: "Имя",
          render: (text, { personData }) => <i>{personData.name}</i>,
          filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
          }) =>
            onFilterDropDown({
              setSelectedKeys,
              selectedKeys,
              confirm,
              clearFilters,
            }),
          filterIcon: () => {
            return <SearchOutlined style={{ fontSize: "20px" }} />;
          },
          onFilter: (value, record) => {
            return [...record.personData.name.toLowerCase()]
              .slice(0, value.length)
              .includes(value.toLowerCase());
          },
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
          filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
          }) =>
            onFilterDropDown({
              setSelectedKeys,
              selectedKeys,
              confirm,
              clearFilters,
            }),
          filterIcon: () => {
            return <SearchOutlined style={{ fontSize: "20px" }} />;
          },
          onFilter: (value, record) => {
            return [...record.addressData.city.toLowerCase()]
              .slice(0, value.length)
              .includes(value.toLowerCase());
          },
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
