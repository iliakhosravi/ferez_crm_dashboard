import { RouteObject } from "react-router-dom";
import { DashboardPage } from "../pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardPage />,
  },
];

export default routes;
