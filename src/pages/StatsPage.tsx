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
      <div style={{
        width:"100%",
        height: "10vh",
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
        fontWeight:"bold",
        color:"#1677FF",
        borderBottom: "solid 1px #d7ebfa"
      }}>
      تحلیل ها و آمار بازدید
      </div>
      {/* <h1>تحلیل ها و آمار بازدید</h1> */}
      <Lottie options={defaultOptions} height={400} width={400} />
      <h3>تیم فرز درحال آماده سازی این صحفه میباشد.</h3>
    </section>
  );
};

export default StatsPage;
