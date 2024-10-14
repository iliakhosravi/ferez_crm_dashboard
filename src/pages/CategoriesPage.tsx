import { FC, useEffect, useState } from "react";
import { useCategory } from "../hooks";
import { Button, Flex, Spin } from "antd";
import { iCategory } from "../hooks/useCategory";
import { Category, CategoryModal } from "../components";
import { PlusOutlined } from "@ant-design/icons";

const CategoriesPage: FC = () => {
  const { getCategories, loading } = useCategory();

  const [categories, setCategories] = useState<iCategory[]>([]);
  const [category, setCategory] = useState<iCategory | null>(null);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, [getCategories]);

  const handleEdit = (cat: iCategory) => {
    setCategory(cat);
  };

  const handleAdd = () => {
    setCategory({});
  };

  const handleClose = () => {
    setCategory(null);
    getCategories().then((res) => {
      setCategories(res);
    });
  };

  return (
    <section>
      {category !== null && (
        <CategoryModal category={category} onclose={handleClose} />
      )}
      <Flex align="center" justify="space-between">
        <h1>دسته بندی ها</h1>
        <div>
          <Button type="primary" onClick={handleAdd}>
            <PlusOutlined />
            ایجاد دسته بندی جدید
          </Button>
        </div>
      </Flex>
      <Flex gap={30} wrap justify="center">
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
              />
            );
          })
        )}
      </Flex>
    </section>
  );
};

export default CategoriesPage;
