import { DonutSmallOutlined } from "@mui/icons-material";
import { FC } from "react";
import Lottie from "react-lottie";
import LotilAnimation from "../assets/lotties/building.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LotilAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const StatsPage: FC = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          fontWeight: "bold",
          color: "#1677FF",
          borderBottom: "solid 1px #d7ebfa",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <DonutSmallOutlined />
          تحلیل ها و آمار بازدید
        </div>
      </div>
      {/* <h1>تحلیل ها و آمار بازدید</h1> */}
      <Lottie options={defaultOptions} height={400} width={400} />
      <h3>تیم فرز درحال آماده سازی این صفحه میباشد.</h3>
    </section>
  );
};

export default StatsPage;
