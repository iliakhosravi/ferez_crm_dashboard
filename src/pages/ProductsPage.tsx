import { PlusOutlined } from "@ant-design/icons";
import { PrecisionManufacturingOutlined } from "@mui/icons-material";
import { Button } from "antd";
import { FC } from "react";

const ProductsPage: FC = () => {
  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "bold",
          color: "#1677FF",
          borderBottom: "solid 1px #d7ebfa",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <PrecisionManufacturingOutlined />
          محصولات
        </div>
        <Button type="primary">
          <PlusOutlined />
          ایجاد محصول جدید
        </Button>
      </div>
    </section>
  );
};

export default ProductsPage;
