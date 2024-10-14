import {
  BarChartOutlined,
  BulbOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  DollarOutlined,
  FolderOutlined,
  GiftOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  ProductOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { createElement, ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import {
  BrandPage,
  CategoriesPage,
  DashboardPage,
  ProductsPage,
  SpecialProductsPage,
  SpecialSalePage,
  StatsPage,
  SuggestionsPage,
  SupportPage,
  TransactionsPage,
} from "../pages";

type iRoute = RouteObject & { label: string; key: string; icon?: ReactNode };

const mainRoutes: iRoute[] = [
  {
    key: "",
    element: <DashboardPage />,
    label: "داشبورد",
    icon: createElement(DashboardOutlined),
  },
  {
    key: "brand",
    element: <BrandPage />,
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
    key: "special-sale",
    element: <SpecialSalePage />,
    label: " پیشنهادات ویژه",
    icon: createElement(TagOutlined),
  },
  {
    key: "special-products",
    element: <SpecialProductsPage />,
    label: "محصولات نمونه",
    icon: createElement(GiftOutlined),
  },
  {
    key: "support",
    element: <SupportPage />,
    label: "ارتباط با پشتیبانی",
    icon: createElement(CustomerServiceOutlined),
  },
  {
    key: "transactions",
    element: <TransactionsPage />,
    label: "لیست تراکنش ها",
    icon: createElement(DollarOutlined),
  },
  {
    key: "stats",
    element: <StatsPage />,
    label: "تحلیل ها و آمار بازدید",
    icon: createElement(BarChartOutlined),
  },
  {
    key: "suggestions",
    element: <SuggestionsPage />,
    label: "پیشنهادات فرز",
    icon: createElement(BulbOutlined),
  },
  {
    key: "logout",
    label: "خروج",
    icon: createElement(LogoutOutlined),
  },
];

export default mainRoutes;
