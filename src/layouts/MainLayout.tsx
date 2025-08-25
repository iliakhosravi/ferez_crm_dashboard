import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Layout, Menu, MenuProps, theme } from "antd";
import { FC, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import mainRoutes from "../routers/mainRoutes";
import Cookies from "js-cookie";

const { Content } = Layout;

interface iMainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<iMainLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const location = useLocation();

  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  const handleMenuItemSelect: MenuProps["onSelect"] = ({ key }) => {
    closeDrawer();
    if (key === "logout") {
      localStorage.clear();
      navigate("/login");
      return;
    }
    navigate(key);
  };

  useEffect(() => {
    const temp = Cookies.get("token");

    if (!temp) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Layout dir="rtl" style={{ minHeight: "100vh" }}>
      <Drawer
        closable={false}
        placement="right"
        open={drawerIsOpen}
        onClose={closeDrawer}
        width={250}
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname.slice(1)]}
          style={{ height: "100%" }}
          onSelect={handleMenuItemSelect}
        >
          <Flex
            justify="center"
            align="center"
            style={{ paddingBlock: "20px" }}
          >
            <img src={logo} alt="Ferez Logo" width={50} height={50} />
          </Flex>
          {mainRoutes.map((route) => (
            <Menu.Item
              key={route.key}
              icon={route.icon}
              danger={route.key === "logout"}
              dir="rtl"
            >
              {route.label}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
      <Button
        onClick={openDrawer}
        size="large"
        type="primary"
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          zIndex: 1000,
        }}
        shape="circle"
      >
        <MenuOutlined />
      </Button>
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
