import React, { useEffect } from "react";
import "./PatientCardPage.css";
import { Typography } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientById } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchPatientById";
import { titleTablePatient } from "commonsFiles/titlesForTableCards/titleTablePatient";
import { fetchDeletePatient } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchDeletePatient";
import { on_edit_mode } from "redux/actions/createActions";
import { CardItem } from "components/CardItem";
import { fetchVerifyAuthUser } from "../../redux/middlewares/fetchVerifyAuthUser";

const PatientCardPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { selectedPatient } = useSelector((state) => state.storeReducer);
  const id = params.id;

  useEffect(() => {
    dispatch(fetchVerifyAuthUser());
    dispatch(fetchPatientById(id));
  }, []);

  const handleOnEditMode = (id) => {
    dispatch(on_edit_mode());
    dispatch(fetchPatientById(id));
    navigate(`/addNewPatient${id}`);
  };
  const handleRemovePatient = (id) => {
    dispatch(fetchDeletePatient(id));
    navigate("/administrator");
  };

  const { patientPersonalData } = selectedPatient;

  return (
    <div className="card-page-container">
      <Typography.Title style={{ justifySelf: "center" }}>
        <div className="title-card-patient">
          <i>{patientPersonalData?.personData.lastName}</i>
          <i>{patientPersonalData?.personData.name}</i>
          <i>{patientPersonalData?.personData.patronymic}</i>
        </div>
      </Typography.Title>
      {patientPersonalData && (
        <CardItem
          handleOnEditMode={handleOnEditMode}
          handleRemovePatient={handleRemovePatient}
          titleCard={titleTablePatient}
          selectedItem={patientPersonalData}
          id={id}
        />
      )}
    </div>
  );
};

export { PatientCardPage };
