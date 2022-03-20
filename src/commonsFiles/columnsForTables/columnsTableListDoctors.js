import { fetchDeleteDoctor } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchDoctorDB/fetchDeleteDoctor";
import { on_edit_mode } from "redux/actions/createActions";
import { fetchDoctorById } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchDoctorDB/fetchDoctorById";
import { Link, useNavigate } from "react-router-dom";
import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";
import { Tooltip, Popconfirm } from "antd";
import { propsFilterLastName } from "components/FilterDropDown/propsFilterLastName";
import React from "react";
import { useDispatch } from "react-redux";

export const useColumnsTableListDoctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemoveDoctor = (id) => {
    dispatch(fetchDeleteDoctor(id));
  };
  const handleOnEditMode = (id) => {
    dispatch(on_edit_mode());
    dispatch(fetchDoctorById(id));
    navigate(`/addNewDoctor${id}`);
  };
  return [
    {
      title: "Фамилия",
      render: (text, { personData }) => {
        return <Link to={`/doctorCard${text.id}`}>{personData.lastName}</Link>;
      },
      key: "lastName",
      ...propsFilterLastName,
    },
    {
      title: "Имя",
      render: ({ personData }) => {
        return <i>{personData.name}</i>;
      },
      key: "name",
    },

    {
      title: "Отчество",
      render: ({ personData }) => {
        return <i>{personData.patronymic || "Не указано"}</i>;
      },
      key: "patronymic",
    },
    {
      title: "Специальность",
      render: ({ personData }) => {
        return <i>{personData.specialization || "Не указано"}</i>;
      },
      key: "specialization",
      filters: [
        { text: "Хирург", value: "Хирург" },
        { text: "Ортопед", value: "Ортопед" },
        { text: "Терапевт", value: "Терапевт" },
      ],
      onFilter: (value, record) => record.personData.specialization === value,
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <div className="icon-group">
            <Tooltip title={"Редактировать"}>
              <EditTwoTone
                onClick={() => handleOnEditMode(record.id)}
                className="icon"
              />
            </Tooltip>
            <Tooltip title={"Удалить"}>
              <Popconfirm
                title={"Вы уверены, что хотите удалить врача?"}
                onConfirm={() => handleRemoveDoctor(record.id)}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined className="icon" />
              </Popconfirm>
            </Tooltip>
          </div>
        );
      },
      key: "specialization",
    },
  ];
};
