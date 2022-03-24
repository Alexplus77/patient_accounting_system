import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "./TitlePatientMedicalCart.css";

export const TitlePatientMedicalCart = () => {
  const { selectedPatient } = useSelector((state) => state?.storeReducer);
  const { patientPersonalData, _id } = selectedPatient;
  return (
    <div className="title-patientMedicalCartPage-container">
      <Typography.Title style={{ justifySelf: "center" }}>
        <div className="title-patientMedicalCartPage">
          <i>{patientPersonalData?.personData.lastName}</i>
          <i>{patientPersonalData?.personData.name}</i>
          <i>{patientPersonalData?.personData.patronymic}</i>
        </div>
      </Typography.Title>
      <Typography.Title
        level={3}
        style={{
          color: "white",
          display: "grid",
          width: "900px",
          gridAutoFlow: "column",
          justifySelf: "center",
        }}
      >
        <i>
          Дата рождения:{" "}
          {patientPersonalData?.personData?.dateOfBirth &&
            format(
              new Date(patientPersonalData?.personData?.dateOfBirth),
              "dd.MM.yy"
            )}
        </i>
        <i>Место проживания: г. {patientPersonalData?.addressData.city}</i>
        <Link to={`/patientCard${_id}`}>...подробнее</Link>
      </Typography.Title>
    </div>
  );
};
