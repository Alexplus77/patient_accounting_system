import React from "react";
import { Button, Card, Col, Row } from "antd";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CardItem.css";

export const CardItem = ({
  handleRemovePatient,
  handleOnEditMode,
  titleCard,
  selectedItem,
  id,
}) => {
  const { loading } = useSelector((state) => state.storeReducer);
  return (
    <div className="card-container">
      <div className="background-card" />
      <Row className="rowCard">
        {Object.entries(titleCard).map((el) => {
          const rowsCard = Object.entries(el[1]);
          rowsCard.splice(0, 1);
          return (
            <Col key={el[1].title} className="columns-card">
              <Card
                //loading={loading}
                key={el[1].title}
                className="card-patient"
                title={
                  <i key={el[1].title} style={{ color: "white" }}>
                    {el[1].title}
                  </i>
                }
              >
                {rowsCard.map((elem) => {
                  if (elem[0] === "dateOfBirth" || elem[0] === "dateOfIssue") {
                    return (
                      <p key={elem[1]}>
                        {elem[1]}:{" "}
                        {format(
                          new Date(selectedItem[el[0]][elem[0]]),
                          "dd.MM.yyyy"
                        ) || "Не указано"}{" "}
                      </p>
                    );
                  }
                  return (
                    <p key={elem[1]}>
                      {elem[1]}: {selectedItem[el[0]][elem[0]] || "Не указано"}{" "}
                    </p>
                  );
                })}
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
  );
};
