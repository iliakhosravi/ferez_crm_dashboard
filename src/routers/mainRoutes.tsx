import { LaptopOutlined } from "@ant-design/icons";
import { createElement, ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import { DashboardPage } from "../pages";

type iRoute = RouteObject & { label: string; key: string; icon?: ReactNode };

const mainRoutes: iRoute[] = [
  {
    key: "",
    element: <DashboardPage />,
    label: "داشبورد",
    icon: createElement(LaptopOutlined),
  },
];

export default mainRoutes;
