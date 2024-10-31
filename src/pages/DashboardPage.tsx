import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/brand");
  }, [navigate]);

  return <section></section>;
};

export default DashboardPage;
