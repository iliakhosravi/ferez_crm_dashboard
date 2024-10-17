/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AddOutlined,
  PrecisionManufacturingOutlined,
} from "@mui/icons-material";
import { Button, ConfigProvider, Flex, message, Pagination, Spin } from "antd";
import { FC, useEffect, useState } from "react";
import { Product, ProductModal } from "../components";
import useProduct, { iProduct } from "../hooks/useProducts";

const ProductsPage: FC = () => {
  const {
    getProducts,
    updateProduct,
    createProduct,
    products,
    total,
    loading,
    deleteProduct,
  } = useProduct();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalProduct, setModalProduct] = useState<iProduct | null>(null);
  const [readOnly, setReadOnly] = useState<boolean>(false);

  useEffect(() => {
    getProducts(currentPage);
  }, [currentPage, getProducts]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEdit = (product: iProduct) => {
    setModalProduct(product);
  };

  const handleView = (product: iProduct) => {
    setModalProduct(product);
    setReadOnly(true);
  };

  const handleAdd = () => {
    setModalProduct({} as iProduct);
  };

  const handleCloseModal = () => {
    setModalProduct(null);
    setCurrentPage(1);
    getProducts(currentPage);
    setReadOnly(false);
  };

  const handleSubmit = (data: iProduct, fileList: any[]) => {
    const formData = new FormData();

    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("images[]", file.originFileObj);
      }
    });

    Object.keys(data).forEach((key) => {
      if (key !== "images") {
        formData.append(key, data[key as keyof iProduct] as string);
      }
    });

    if (data.id) {
      updateProduct(data.id, formData as any)
        .then(() => {
          message.success("محصول به روز رسانی شد");
          handleCloseModal();
        })
        .catch(() => message.error("خطایی رخ داده است"));
    } else {
      createProduct(formData as any)
        .then(() => {
          message.success("محصول ایجاد شد");
          handleCloseModal();
        })
        .catch(() => message.error("خطایی رخ داده است"));
    }
  };

  const handleDelete = (id: number) => {
    deleteProduct(id)
      .then(() => {
        message.success("محصول حذف شد");
        getProducts();
      })
      .catch(() => message.error("خطایی رخ داده است"));
  };

  return (
    <section>
      <ConfigProvider direction="rtl">
        {modalProduct !== null && (
          <ProductModal
            product={modalProduct}
            onClose={handleCloseModal}
            onSubmit={handleSubmit}
            readOnly={readOnly}
          />
        )}

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
          <Button type="primary" onClick={handleAdd}>
            <AddOutlined />
            محصول جدید
          </Button>
        </div>

        <div style={{ marginTop: "20px" }}>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Flex wrap gap={16} justify="center">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onView={handleView}
                />
              ))}
            </Flex>
          )}
        </div>

        <Flex justify="center" style={{ marginTop: "20px" }}>
          <Pagination
            current={currentPage}
            pageSize={10}
            total={total}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </Flex>
      </ConfigProvider>
    </section>
  );
};

export default ProductsPage;
