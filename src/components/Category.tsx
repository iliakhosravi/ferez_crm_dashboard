import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Flex } from "antd";
import { FC } from "react";
import { iCategory } from "../hooks/useCategory";

const Category: FC<{ category: iCategory }> = ({ category }) => {
  return (
    <Card
      actions={[
        <Button danger type="primary">
          <DeleteOutlined />
        </Button>,
        <Button>
          <EditOutlined />
        </Button>,
      ]}
    >
      <Flex vertical align="center" gap={20}>
        <h3>{category.name}</h3>
      </Flex>
    </Card>
  );
};

export default Category;
