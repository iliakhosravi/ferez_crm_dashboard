import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import mainRoutes from "./mainRoutes";

const MainRouter: FC = () => {
  return (
    <MainLayout>
      <Routes>
        {mainRoutes.map((route) => (
          <Route path={route.key} element={route.element} key={route.key} />
        ))}
      </Routes>
    </MainLayout>
  );
};

export default MainRouter;
