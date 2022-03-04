import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
import { MainPage } from "pages/MainPage";
import { AdministratorPage } from "pages/AdministratorPage/AdministratorPage";
import { AddNewPatientPage } from "pages/AddNewPatientPage";
import { PatientCardPage } from "pages/PatientCardPage";
import { PatientEditPage } from "pages/PatientEditPage";

const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={"/administrator"} element={<AdministratorPage />} />
        <Route path={"/addNewPatient"} element={<AddNewPatientPage />} />
        <Route path={"/patientCard:id"} element={<PatientCardPage />} />
        <Route path={"/patientEdit:id"} element={<PatientEditPage />} />
      </Route>
    </Routes>
  );
};
export { Routers };
