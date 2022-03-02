import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
import { MainPage } from "pages/MainPage";
import { AdministratorPage } from "pages/AdministratorPage/AdministratorPage";
import { FormAddPatient } from "components/FormAddPatient";
import { PatientCardPage } from "pages/PatientCardPage";

const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={"/administrator"} element={<AdministratorPage />} />
        <Route path={"/addNewPatient"} element={<FormAddPatient />} />
        <Route path={"/patientCard:id"} element={<PatientCardPage />} />
      </Route>
    </Routes>
  );
};
export { Routers };
