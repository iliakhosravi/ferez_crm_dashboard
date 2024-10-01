import { FC, ReactNode } from "react";

interface iMainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<iMainLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MainLayout;
