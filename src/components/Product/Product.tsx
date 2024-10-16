import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Card, Flex } from "antd";
import { FC } from "react";
import { iProduct } from "../../hooks/useProducts";

const Product: FC<{
  product: iProduct;
  onEdit?: (cat: iProduct) => void;
  onView?: (id: number) => void;
  //   onDelete
}> = ({ product, onEdit, onView }) => {
  const handleEdit = () => {
    // onEdit(product);
  };

  const handleView = () => {
    // onView(product.id || 0);
  };

  return (
    <Card
      actions={[
        <Button danger type="primary">
          <DeleteOutlined />
        </Button>,
        <Button onClick={handleView}>
          <EyeOutlined />
        </Button>,
        <Button onClick={handleEdit}>
          <EditOutlined />
        </Button>,
      ]}
      style={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          minHeight: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ textAlign: "center" }}>{product.name}</h3>
      </div>
    </Card>
  );
};

export default Product;
