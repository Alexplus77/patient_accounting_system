import { fetchDeleteAdministrator } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchAdministratorDB/fetchDeleteAdministrator";
import { on_edit_mode } from "redux/actions/createActions";
import { fetchAdministratorById } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchAdministratorDB/fetchAdministratorById";
import { Link, useNavigate } from "react-router-dom";
import { DeleteOutlined, EditTwoTone, SearchOutlined } from "@ant-design/icons";
import { onFilterDropDown } from "components/FilterDropDown/onFillterDropDown";
import React from "react";
import { useDispatch } from "react-redux";
import { propsFilterLastName } from "components/FilterDropDown/propsFilterLastName";

export const useColumnsTableListAdministrators = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemoveAdministrator = (id) => {
    dispatch(fetchDeleteAdministrator(id));
  };
  const handleOnEditMode = (id) => {
    dispatch(on_edit_mode());
    dispatch(fetchAdministratorById(id));
    navigate(`/addNewAdministrator${id}`);
  };

  return [
    {
      title: "Фамилия",
      render: (text, { personData }) => {
        return (
          <Link to={`/administratorCard${text.id}`}>{personData.lastName}</Link>
        );
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
      title: "Actions",
      render: (record) => {
        return (
          <div className="icon-group">
            <EditTwoTone
              onClick={() => handleOnEditMode(record.id)}
              className="icon"
            />
            <DeleteOutlined
              onClick={() => handleRemoveAdministrator(record.id)}
              className="icon"
            />
          </div>
        );
      },
      key: "specialization",
    },
  ];
};
