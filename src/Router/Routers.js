import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
import { MainPage } from "pages/MainPage";
import { AdministratorPage } from "pages/AdministratorPage/AdministratorPage";
import { AddNewPatientPage } from "pages/AddNewPatientPage";
import { PatientCardPage } from "pages/PatientCardPage";
import { SuperAdministratorPage } from "pages/SuperAdninistratorPage";
import { AddNewDoctorPage } from "pages/AddNewDoctorPage";
import { AddNewAdministratorPage } from "pages/AddNewAdministratorPage";
import { DoctorCardPage } from "pages/DoctorCardPage";
import { AdministratorCardPage } from "pages/AdministratorCardPage";
import { RequiredAuth } from "hocs/RequiredAuth";
import { DoctorPage } from "pages/DoctorPage";
import { PatientsMedicalCartPage } from "pages/PatientsMedicalCartPage";

const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route
          path={"/medicalCardId:id"}
          element={
            <RequiredAuth>
              <PatientsMedicalCartPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/pageDoctorId:id"}
          element={
            <RequiredAuth>
              <DoctorPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/administrator"}
          element={
            <RequiredAuth>
              <AdministratorPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/addNewPatient"}
          element={
            <RequiredAuth>
              <AddNewPatientPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/addNewPatient:id"}
          element={
            <RequiredAuth>
              <AddNewPatientPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/patientCard:id"}
          element={
            <RequiredAuth>
              <PatientCardPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/doctorCard:id"}
          element={
            <RequiredAuth>
              <DoctorCardPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/administratorCard:id"}
          element={
            <RequiredAuth>
              <AdministratorCardPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/superAdministrator"}
          element={
            <RequiredAuth>
              <SuperAdministratorPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/addNewDoctor"}
          element={
            <RequiredAuth>
              <AddNewDoctorPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/addNewDoctor:id"}
          element={
            <RequiredAuth>
              <AddNewDoctorPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/addNewAdministrator"}
          element={
            <RequiredAuth>
              <AddNewAdministratorPage />
            </RequiredAuth>
          }
        />
        <Route
          path={"/addNewAdministrator:id"}
          element={
            <RequiredAuth>
              <AddNewAdministratorPage />
            </RequiredAuth>
          }
        />
      </Route>
    </Routes>
  );
};
export { Routers };
