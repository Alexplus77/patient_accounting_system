import React, { useEffect } from "react";
import { TableDoctorsAppointment } from "components/TableDoctorsAppointment/TableDoctorsAppointment";
import "./DoctorPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetDoctorsAppointment } from "redux/middlewares/middlewaresPanelDoctor/fetchGetDoctorsAppointment";
import { fetchVerifyAuthUser } from "redux/middlewares/fetchVerifyAuthUser";
import { useParams } from "react-router-dom";

const DoctorPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchVerifyAuthUser());
    dispatch(fetchGetDoctorsAppointment(id));
  }, []);
  return (
    <div className="container-doctor-page">
      <TableDoctorsAppointment />
    </div>
  );
};

export { DoctorPage };
