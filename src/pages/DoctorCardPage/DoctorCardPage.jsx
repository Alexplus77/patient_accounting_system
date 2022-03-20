import React, { useEffect } from "react";
import "./DoctorCardPage.css";
import { Typography } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorById } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchDoctorDB/fetchDoctorById";
import { titleTableDoctor } from "commonsFiles/titlesForTableCards/titleTableDoctor";
import { fetchDeleteDoctor } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchDoctorDB/fetchDeleteDoctor";
import { on_edit_mode } from "redux/actions/createActions";
import { CardItem } from "components/CardItem";
import { fetchVerifyAuthUser } from "redux/middlewares/fetchVerifyAuthUser";

const DoctorCardPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  useEffect(() => {
    dispatch(fetchVerifyAuthUser());
    dispatch(fetchDoctorById(id));
  }, []);

  const { selectStaff } = useSelector((state) => state.stuffReducer);
  const handleOnEditMode = (id) => {
    dispatch(on_edit_mode());
    dispatch(fetchDoctorById(id));
    navigate(`/addNewDoctor${id}`);
  };
  const handleRemovePatient = (id) => {
    dispatch(fetchDeleteDoctor(id));
    navigate("/superAdministrator");
  };

  const { doctorPersonalData } = selectStaff;
  return (
    <div className="card-page-container">
      <Typography.Title style={{ justifySelf: "center" }}>
        <div className="title-card-patient">
          <i>{doctorPersonalData?.personData.lastName}</i>
          <i>{doctorPersonalData?.personData.name}</i>
          <i>{doctorPersonalData?.personData.patronymic}</i>
        </div>
      </Typography.Title>
      {doctorPersonalData && (
        <CardItem
          handleOnEditMode={handleOnEditMode}
          handleRemovePatient={handleRemovePatient}
          titleCard={titleTableDoctor}
          selectedItem={doctorPersonalData}
          id={id}
        />
      )}
    </div>
  );
};

export { DoctorCardPage };
