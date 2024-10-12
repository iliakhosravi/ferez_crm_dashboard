import {
  FolderOutlined,
  InfoCircleOutlined,
  ProductOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { createElement, ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import { CategoriesPage, DashboardPage, ProductsPage } from "../pages";

type iRoute = RouteObject & { label: string; key: string; icon?: ReactNode };

const mainRoutes: iRoute[] = [
  {
    key: "",
    element: <DashboardPage />,
    label: "اطلاعات برند",
    icon: createElement(InfoCircleOutlined),
  },
  {
    key: "products",
    element: <ProductsPage />,
    label: "محصولات",
    icon: createElement(ProductOutlined),
  },
  {
    key: "categories",
    element: <CategoriesPage />,
    label: "دسته بندی ها",
    icon: createElement(FolderOutlined),
  },
  {
    key: "logout",
    label: "خروج",
    icon: createElement(LogoutOutlined),
  },
];

export default mainRoutes;
