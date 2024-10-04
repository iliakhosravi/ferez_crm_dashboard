import { Layout, Menu, MenuProps, theme } from "antd";
import { FC, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mainRoutes from "../routers/mainRoutes";

const { Content, Sider } = Layout;

interface iMainLayoutProps {
  children: ReactNode;
}

const items: MenuProps["items"] = mainRoutes;

const MainLayout: FC<iMainLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const location = useLocation();

  const handleMenuItemSelect: MenuProps["onSelect"] = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout dir="rtl" style={{ minHeight: "100vh" }}>
      <Sider width={200} style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname.slice(1)]}
          style={{ height: "100%" }}
          items={items}
          onSelect={handleMenuItemSelect}
        />
      </Sider>
      <Layout style={{ padding: "24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
