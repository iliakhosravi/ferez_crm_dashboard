import { FC } from "react";
import LotilAnimation from "../assets/lotties/building.json";
import Lottie from "react-lottie";

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
      <h1>تحلیل ها و آمار بازدید</h1>
      <Lottie options={defaultOptions} height={400} width={400} />
      <h3>تیم فرز درحال آماده سازی این صحفه میباشد.</h3>
    </section>
  );
};

export default StatsPage;
