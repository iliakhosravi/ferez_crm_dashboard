import { CardGiftcardOutlined } from "@mui/icons-material";
import { FC } from "react";

const SpecialProductsPage: FC = () => {
  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          borderBottom: "solid 1px #d7ebfa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CardGiftcardOutlined />
          <h3 style={{ fontWeight: "bold", color: "#1677FF" }}>
            محصولات نمونه
          </h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>محصولی برای نمایش وجود ندارد</p>
      </div>
    </section>
  );
};

export default SpecialProductsPage;
