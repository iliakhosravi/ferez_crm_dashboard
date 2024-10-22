import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Image, Popconfirm } from "antd";
import { FC } from "react";
import { iCategory } from "../../hooks/useCategory";
import fallbackImg from "../../assets/img/fallbackImage.png";

const Category: FC<{
  category: iCategory;
  onEdit: (cat: iCategory) => void;
  onDelete: (id: number) => void;
}> = ({ category, onEdit, onDelete }) => {
  const handleEditClick = () => {
    onEdit(category);
  };

  const handleDeleteClick = () => {
    if (category.id) {
      onDelete(category.id);
    }
  };

  return (
    <Card
      actions={[
        <Popconfirm
          title="آیا مطمئن هستید؟"
          onConfirm={handleDeleteClick}
          okText="حذف"
          cancelText="انصراف"
        >
          <Button danger type="primary">
            <DeleteOutlined />
          </Button>{" "}
        </Popconfirm>,
        <Button onClick={handleEditClick}>
          <EditOutlined />
        </Button>,
      ]}
      style={{ minWidth: "250px" }}
    >
      <Flex vertical align="center" gap={20}>
        <Image
          src={import.meta.env.VITE_BASE_URL + category.image}
          width={250}
          height={250}
          fallback={fallbackImg}
          preview={!!category.image}
        />
        <h3>{category.name}</h3>
      </Flex>
    </Card>
  );
};

export default Category;
