import { CategoryOutlined } from "@mui/icons-material";
import { Button, Flex, Spin } from "antd";
import { FC, useEffect, useState } from "react";
import { Category, CategoryModal } from "../components";
import { useCategory } from "../hooks";
import { iCategory } from "../hooks/useCategory";
import { PlusOutlined } from '@ant-design/icons';
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
      <div style={{
        width:"100%",
        height: "10vh",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        fontWeight:"bold",
        color:"#1677FF",
        borderBottom: "solid 1px #d7ebfa"
      }}>
        <div style={{display:"flex", gap:"8px"}}>
        <CategoryOutlined/>
          دسته بندی ها

        </div>
        <Button type="primary" onClick={handleAdd}>
            <PlusOutlined />
            ایجاد دسته بندی جدید
          </Button>
        </div>
     
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
