import React, { useEffect } from "react";
import "./PatientCardPage.css";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientById } from "redux/middlewares/fetchPatientById";

const PatientCardPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { selectedPatient } = useSelector((state) => state.storeReducer);

  useEffect(() => {
    dispatch(fetchPatientById(params.id));
  }, []);
  const { patientPersonalData } = selectedPatient;
  return (
    <div className="card-container">
      <Card
        title={
          <div className="title-card-patient">
            <i>{patientPersonalData?.lastName}</i>
            <i>{patientPersonalData?.name}</i>
            <i>{patientPersonalData?.patronymic}</i>
          </div>
        }
        bordered={true}
        style={{ width: 300 }}
      >
        {patientPersonalData &&
          Object.entries(patientPersonalData).map((elem) => {
            elem.splice(1, 0, ": ");
            return <p key={elem[0]}>{elem}</p>;
          })}
      </Card>
    </div>
  );
};

export { PatientCardPage };
