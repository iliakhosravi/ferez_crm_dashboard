/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined } from "@ant-design/icons";
import { CategoryOutlined } from "@mui/icons-material";
import { Button, ConfigProvider, Flex, message, Spin } from "antd";
import { FC, useEffect, useState } from "react";
import { Category, CategoryModal } from "../components";
import { useCategory } from "../hooks";
import { iCategory } from "../hooks/useCategory";

const CategoriesPage: FC = () => {
  const {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    loading,
    categories,
  } = useCategory();
  const [categoryModal, setCategoryModal] = useState<iCategory | null>(null);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleEdit = (cat: iCategory) => {
    setCategoryModal(cat);
  };

  const handleAdd = () => {
    setCategoryModal({});
  };

  const handleClose = () => {
    setCategoryModal(null);
    getCategories();
  };

  const handleSubmit = (data: iCategory, fileList: any[]) => {
    const formData = new FormData();

    fileList.forEach((file) => {
      console.log(JSON.stringify(file));
      if (file.originFileObj) {
        formData.append("image", file.originFileObj);
      }
    });

    Object.keys(data).forEach((key) => {
      if (key !== "images") {
        formData.append(key, data[key as keyof iCategory] as string);
      }
    });

    if (data.id) {
      updateCategory(data.id, formData as iCategory)
        .then(() => {
          message.success("دسته بندی به روز رسانی شد");
          handleClose();
        })
        .catch(() => message.error("خطایی رخ داده است"));
    } else {
      addCategory(formData as iCategory)
        .then(() => {
          message.success("دسته بندی ایجاد شد");
          handleClose();
        })
        .catch(() => message.error("خطایی رخ داده است"));
    }
  };

  const handleDelete = (id: number) => {
    deleteCategory(id)
      .then(() => {
        message.success("دسته بندی حذف شد");
        getCategories();
      })
      .catch(() => message.error("خطایی رخ داده است"));
  };

  return (
    <section>
      <ConfigProvider direction="rtl">
        {categoryModal !== null && (
          <CategoryModal
            category={categoryModal}
            onClose={handleClose}
            onSubmit={handleSubmit}
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
            <CategoryOutlined />
            دسته بندی ها
          </div>
          <Button type="primary" onClick={handleAdd}>
            <PlusOutlined />
            ایجاد دسته بندی جدید
          </Button>
        </div>

        <Flex gap={30} wrap justify="center" style={{ paddingTop: 24 }}>
          {loading ? (
            <Flex align="center" justify="center">
              <Spin size="large" />
            </Flex>
          ) : (
            categories.map((category) => {
              return (
                <Category
                  key={category.id}
                  category={category}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              );
            })
          )}
        </Flex>
      </ConfigProvider>
    </section>
  );
};

export default CategoriesPage;
