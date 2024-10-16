import { PlusOutlined } from "@ant-design/icons";
import { PrecisionManufacturingOutlined } from "@mui/icons-material";
import { Button, ConfigProvider, Flex, Pagination, Spin } from "antd";
import { FC, useEffect, useState } from "react";
import { Product, ProductModal } from "../components";
import useProduct from "../hooks/useProducts";

const ProductsPage: FC = () => {
  const { getProducts, products, total, loading } = useProduct();

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getProducts(currentPage);
  }, [currentPage, getProducts]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <ProductModal product={null} onclose={() => {}} />
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
      <Flex gap={30} wrap justify="center" style={{ paddingBlock: "20px" }}>
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Spin size="large" />
          </div>
        ) : (
          products.map((product) => <Product product={product} />)
        )}
      </Flex>

      <Flex justify="center" style={{ marginTop: "20px" }}>
        <ConfigProvider direction="rtl">
          <Pagination
            current={currentPage}
            pageSize={10}
            total={total}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </ConfigProvider>
      </Flex>
    </section>
  );
};

export default ProductsPage;
