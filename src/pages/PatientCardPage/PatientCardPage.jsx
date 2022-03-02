import React, { useEffect } from "react";
import "./PatientCardPage.css";
import { Card, Row, Col, Typography } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientById } from "redux/middlewares/fetchPatientById";
import { titleTablePatient } from "commonsFiles/titleTablePatient";

const PatientCardPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { selectedPatient } = useSelector((state) => state.storeReducer);

  useEffect(() => {
    dispatch(fetchPatientById(params.id));
  }, []);
  const { patientPersonalData } = selectedPatient;
  return (
    <div className="card-page-container">
      <Typography.Title style={{ justifySelf: "center" }}>
        <div className="title-card-patient">
          <i>{patientPersonalData?.lastName}</i>
          <i>{patientPersonalData?.name}</i>
          <i>{patientPersonalData?.patronymic}</i>
        </div>
      </Typography.Title>
      <div className="card-container">
        <Row>
          <Col>
            <Card title={"Личные данные"} style={{ height: "100%" }}>
              {patientPersonalData &&
                Object.entries(titleTablePatient)
                  .slice(0, 8)
                  .map((title) => (
                    <p key={title[0]}>
                      {title[1]}:{" "}
                      {patientPersonalData[title[0]] || "не указано"}
                    </p>
                  ))}
            </Card>
          </Col>
          <Col>
            <Card title={"Адресс"} style={{ height: "100%" }}>
              {patientPersonalData &&
                Object.entries(titleTablePatient)
                  .slice(9, 14)
                  .map((title) => (
                    <p key={title[0]}>
                      {title[1]}:{" "}
                      {patientPersonalData[title[0]] || "не указано"}
                    </p>
                  ))}
            </Card>
          </Col>
          <Col>
            <Card title={"Паспортные данные"} style={{ height: "100%" }}>
              {patientPersonalData &&
                Object.entries(titleTablePatient)
                  .slice(14, 19)
                  .map((title) => (
                    <p key={title[0]}>
                      {title[1]}:{" "}
                      {patientPersonalData[title[0]] || "не указано"}
                    </p>
                  ))}
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { PatientCardPage };
