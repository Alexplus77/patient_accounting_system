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

const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={"/administrator"} element={<AdministratorPage />} />
        <Route path={"/addNewPatient"} element={<AddNewPatientPage />} />
        <Route path={"/addNewPatient:id"} element={<AddNewPatientPage />} />
        <Route path={"/patientCard:id"} element={<PatientCardPage />} />
        <Route path={"/doctorCard:id"} element={<DoctorCardPage />} />
        <Route
          path={"/administratorCard:id"}
          element={<AdministratorCardPage />}
        />
        <Route
          path={"/superAdministrator"}
          element={<SuperAdministratorPage />}
        />
        <Route path={"/addNewDoctor"} element={<AddNewDoctorPage />} />
        <Route path={"/addNewDoctor:id"} element={<AddNewDoctorPage />} />
        <Route
          path={"/addNewAdministrator"}
          element={<AddNewAdministratorPage />}
        />
        <Route
          path={"/addNewAdministrator:id"}
          element={<AddNewAdministratorPage />}
        />
      </Route>
    </Routes>
  );
};
export { Routers };
