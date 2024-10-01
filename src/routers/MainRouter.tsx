import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import routes from "./mainRoutes";

const MainRouter: FC = () => {
  return (
    <MainLayout>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </MainLayout>
  );
};

export default MainRouter;
