import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { LoginPage } from "../pages";
import UserStoreProvider from "../stores/userStore";
import mainRoutes from "./mainRoutes";

const MainRouter: FC = () => {
  return (
    <UserStoreProvider>
      <Routes>
        <Route
          path="*"
          element={
            <MainLayout>
              <Routes>
                {mainRoutes.map((route) => (
                  <Route
                    path={route.key}
                    element={route.element}
                    key={route.key}
                  />
                ))}
              </Routes>
            </MainLayout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </UserStoreProvider>
  );
};

export default MainRouter;
