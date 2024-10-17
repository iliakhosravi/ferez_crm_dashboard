/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AddOutlined,
  PrecisionManufacturingOutlined,
} from "@mui/icons-material";
import { Button, ConfigProvider, Flex, message, Pagination, Spin } from "antd";
import { FC, useEffect, useState } from "react";
import { CategoryItem, Product, ProductModal } from "../components";
import { useCategory } from "../hooks";
import { iCategory } from "../hooks/useCategory";
import useProduct, { iProduct } from "../hooks/useProducts";

const ProductsPage: FC = () => {
  const {
    getProductsByCategory,
    updateProduct,
    createProduct,
    products,
    total,
    loading,
    deleteProduct,
  } = useProduct();

  const { getCategories } = useCategory();

  const [categories, setCategories] = useState<iCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalProduct, setModalProduct] = useState<iProduct | null>(null);
  const [readOnly, setReadOnly] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCategoryId !== 0) {
      getProductsByCategory(currentPage, selectedCategoryId);
    }
  }, [currentPage, selectedCategoryId, getProductsByCategory]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
      setSelectedCategoryId(res[0].id || 0);
    });
  }, [getCategories, getProductsByCategory]);

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
    getProductsByCategory(currentPage, selectedCategoryId);
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
        getProductsByCategory(currentPage, selectedCategoryId);
      })
      .catch(() => message.error("خطایی رخ داده است"));
  };

  const handleSelectCategory = (cat: iCategory) => {
    setSelectedCategoryId(cat.id || 0);
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

        <Flex
          gap={16}
          style={{
            width: "100%",
            overflowX: "scroll",
            marginBlock: 16,
            paddingBlock: 16,
          }}
        >
          {categories.map((category) => (
            <CategoryItem
              category={category}
              selected={selectedCategoryId === category.id}
              onSelect={handleSelectCategory}
            />
          ))}
        </Flex>
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
