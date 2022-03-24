import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { TitlePatientMedicalCart } from "components/TitlePatientMedicalCart";
import { FormPatientsMedicalCart } from "components/Forms/FormPatientsMedicalCart";
import "./PatientsMedicalCartPage.css";
import { fetchVerifyAuthUser } from "redux/middlewares/fetchVerifyAuthUser";
import { fetchPatientById } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchPatientById";
import { TablePatientsMedicalCart } from "components/TablePatientsMedicalCart";

export const PatientsMedicalCartPage = () => {
  const { selectedPatient, formIsVisible } = useSelector(
    (state) => state?.storeReducer
  );
  console.log(formIsVisible);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchVerifyAuthUser());
    dispatch(fetchPatientById(id));
  }, [formIsVisible]);

  return (
    <div className="patientMedicalCartPage-container">
      <TitlePatientMedicalCart />
      <TablePatientsMedicalCart />
    </div>
  );
};
