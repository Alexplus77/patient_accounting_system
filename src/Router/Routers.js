import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
import { MainPage } from "pages/MainPage";

const Routers = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
export { Routers };
