import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Popconfirm } from "antd";
import { FC } from "react";
import { iSpecialSale } from "../../hooks/useSpecialSale";

const SpecialSale: FC<{
  sale: iSpecialSale;
  onEdit: (sale: iSpecialSale) => void;
  onDelete: (id: number) => void;
}> = ({ sale, onEdit, onDelete }) => {
  const handleEditClick = () => {
    onEdit(sale);
  };

  const handleDeleteClick = () => {
    if (sale.id) {
      onDelete(sale.id);
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
        <h3>{sale.title}</h3>
        <p>قیمت: {sale.price}</p>
      </Flex>
    </Card>
  );
};

export default SpecialSale;
