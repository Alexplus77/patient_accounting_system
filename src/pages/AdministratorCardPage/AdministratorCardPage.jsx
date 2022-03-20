import React, { useEffect } from "react";
import "./AdministratorCardPage.css";
import { Typography } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { titleTableAdministrator } from "commonsFiles/titlesForTableCards/titleTableAdministrator";
import { on_edit_mode } from "redux/actions/createActions";
import { CardItem } from "components/CardItem";
import { fetchAdministratorById } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchAdministratorDB/fetchAdministratorById";
import { fetchDeleteAdministrator } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchAdministratorDB/fetchDeleteAdministrator";
import { fetchVerifyAuthUser } from "redux/middlewares/fetchVerifyAuthUser";

const AdministratorCardPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  useEffect(() => {
    dispatch(fetchVerifyAuthUser());
    dispatch(fetchAdministratorById(id));
  }, []);

  const { selectStaff } = useSelector((state) => state.stuffReducer);
  const handleOnEditMode = (id) => {
    dispatch(on_edit_mode());
    dispatch(fetchAdministratorById(id));
    navigate(`/addNewAdministrator${id}`);
  };
  const handleRemovePatient = (id) => {
    dispatch(fetchDeleteAdministrator(id));
    navigate("/superAdministrator");
  };

  const { administratorPersonalData } = selectStaff;
  return (
    <div className="card-page-container">
      <Typography.Title style={{ justifySelf: "center" }}>
        <div className="title-card-patient">
          <i>{administratorPersonalData?.personData.lastName}</i>
          <i>{administratorPersonalData?.personData.name}</i>
          <i>{administratorPersonalData?.personData.patronymic}</i>
        </div>
      </Typography.Title>
      {administratorPersonalData && (
        <CardItem
          handleOnEditMode={handleOnEditMode}
          handleRemovePatient={handleRemovePatient}
          titleCard={titleTableAdministrator}
          selectedItem={administratorPersonalData}
          id={id}
        />
      )}
    </div>
  );
};

export { AdministratorCardPage };
