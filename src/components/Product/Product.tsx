import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Card, Popconfirm } from "antd";
import { FC } from "react";
import { iProduct } from "../../hooks/useProducts";

const Product: FC<{
  product: iProduct;
  onEdit: (prod: iProduct) => void;
  onDelete: (id: number) => void;
  onView: (prod: iProduct) => void;
}> = ({ product, onEdit, onDelete, onView }) => {
  const handleEdit = () => {
    onEdit(product);
  };

  const handleDelete = () => {
    if (product.id) {
      onDelete(product.id);
    }
  };

  const handleView = () => {
    onView(product);
  };

  return (
    <Card
      actions={[
        <Popconfirm
          title="آیا مطمئن هستید؟"
          onConfirm={handleDelete}
          okText="حذف"
          cancelText="انصراف"
        >
          <Button danger type="primary">
            <DeleteOutlined />
          </Button>{" "}
        </Popconfirm>,
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {product.first_images && (
          <img
            src={import.meta.env.VITE_BASE_URL + product.first_images?.src}
            style={{ height: "200px", width: "100%" }}
            alt={product.name}
          />
        )}
        <h3 style={{ textAlign: "center" }}>{product.name}</h3>
      </div>
    </Card>
  );
};

export default Product;
