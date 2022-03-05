import React, { useEffect } from "react";
import "./PatientCardPage.css";
import { Card, Row, Col, Typography, Button } from "antd";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientById } from "redux/middlewares/fetchPatientById";
import { titleTablePatient } from "commonsFiles/titleTablePatient";
import { fetchDeletePatient } from "redux/middlewares/fetchDeletePatient";
import { on_edit_mode } from "redux/actions/createActions";
import moment from "moment";

const PatientCardPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { selectedPatient } = useSelector((state) => state.storeReducer);
  const id = params.id;

  useEffect(() => {
    dispatch(fetchPatientById(id));
  }, []);

  const handleOnEditMode = (id) => {
    dispatch(on_edit_mode());
    dispatch(fetchPatientById(id));
    navigate(`/patientEdit${id}`);
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
      <div className="card-container">
        <div className="background-card" />
        <Row className="rowCard">
          {patientPersonalData &&
            Object.entries(titleTablePatient).map((el) => {
              const rowsCard = Object.entries(el[1]);
              rowsCard.splice(0, 1);
              return (
                <Col key={el[1].title} className="columns-card">
                  <Card
                    key={el[1].title}
                    className="card-patient"
                    title={
                      <i key={el[1].title} style={{ color: "white" }}>
                        {el[1].title}
                      </i>
                    }
                  >
                    {rowsCard.map((elem) => (
                      <p key={elem[1]}>
                        {elem[1]}:{" "}
                        {patientPersonalData[el[0]][elem[0]] || "Не указано"}{" "}
                      </p>
                    ))}
                  </Card>
                </Col>
              );
            })}
          <div className="btns-patient-card">
            <Button className="btn" onClick={() => handleOnEditMode(id)}>
              Изменить
            </Button>
            <Button className="btn" onClick={() => handleRemovePatient(id)}>
              Удалить
            </Button>{" "}
            <Button className="btn" style={{ width: "100px" }}>
              <Link to={-1}>Назад</Link>
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
};

export { PatientCardPage };
