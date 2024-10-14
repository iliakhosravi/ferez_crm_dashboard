import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Flex } from "antd";
import { FC } from "react";
import { iCategory } from "../../hooks/useCategory";

const Category: FC<{
  category: iCategory;
  onEdit: (cat: iCategory) => void;
}> = ({ category, onEdit }) => {
  const handleClick = () => {
    onEdit(category);
  };

  return (
    <Card
      actions={[
        <Button danger type="primary">
          <DeleteOutlined />
        </Button>,
        <Button onClick={handleClick}>
          <EditOutlined />
        </Button>,
      ]}
      style={{ minWidth: "250px" }}
    >
      <Flex vertical align="center" gap={20}>
        {category.image && <img src={category.image} width={250} />}
        <h3>{category.name}</h3>
      </Flex>
    </Card>
  );
};

export default Category;
