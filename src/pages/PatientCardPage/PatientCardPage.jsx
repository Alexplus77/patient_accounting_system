import React, { useEffect } from "react";
import "./PatientCardPage.css";
import { Card, Row, Col, Typography, Button } from "antd";
import { Link, useParams } from "react-router-dom";
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
  console.log(patientPersonalData);
  return (
    <div className="card-page-container">
      <Typography.Title style={{ justifySelf: "center" }}>
        <div className="title-card-patient">
          <i>{patientPersonalData?.personData.lastName}</i>
          <i>{patientPersonalData?.personData.name}</i>
          <i style={{ width: "200px" }}>
            {patientPersonalData?.personData.patronymic}
          </i>
        </div>
      </Typography.Title>
      <div className="card-container">
        <div className="background-card" />
        <Row className="rowCard">
          {patientPersonalData &&
            Object.entries(titleTablePatient).map((el) => {
              const rowsCard = Object.entries(el[1]);
              rowsCard.splice(0, 1);
              return (
                <Col className="columns-card">
                  <Card
                    className="card-patient"
                    title={<i style={{ color: "white" }}>{el[1].title}</i>}
                  >
                    {rowsCard.map((elem) => (
                      <p>
                        {elem[1]}:{" "}
                        {patientPersonalData[el[0]][elem[0]] || "Не указано"}{" "}
                      </p>
                    ))}
                  </Card>
                </Col>
              );
            })}
          <div className="btns-patient-card">
            <Button className="btn">Изменить</Button>
            <Button className="btn">Удалить</Button>{" "}
            <Link to={"/administrator"}>
              <Button className="btn" style={{ width: "100px" }}>
                Назад
              </Button>
            </Link>
          </div>
        </Row>
      </div>
    </div>
  );
};

export { PatientCardPage };
