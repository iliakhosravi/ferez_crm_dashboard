/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddOutlined, LocalOfferOutlined } from "@mui/icons-material";
import { Button, ConfigProvider, Flex, message, Spin } from "antd";
import { FC, useEffect, useState } from "react";
import { SpecialSale, SpecialSaleModal } from "../components";
import useSpecialSales, { iSpecialSale } from "../hooks/useSpecialSale";

const SpecialSalePage: FC = () => {
  const {
    getSpecialSales,
    createSpecialSale,
    updateSpecialSale,
    deleteSpecialSale,
    loading,
    specialSales,
  } = useSpecialSales();
  const [modalSale, setModalSale] = useState<iSpecialSale | null>(null);

  useEffect(() => {
    getSpecialSales();
  }, [getSpecialSales]);

  const handleEdit = (sale: iSpecialSale) => {
    setModalSale(sale);
  };

  const handleAdd = () => {
    setModalSale({});
  };

  const handleCloseModal = () => {
    setModalSale(null);
    getSpecialSales();
  };

  const handleSubmit = (data: iSpecialSale, fileList: any[]) => {
    const formData = new FormData();

    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("images[]", file.originFileObj);
      }
    });

    Object.keys(data).forEach((key) => {
      if (key !== "images") {
        formData.append(key, data[key as keyof iSpecialSale] as string);
      }
    });

    if (data.id) {
      updateSpecialSale(data.id, formData as iSpecialSale)
        .then(() => {
          message.success("پیشنهاد ویژه به روز رسانی شد");
          handleCloseModal();
        })
        .catch(() => message.error("خطایی رخ داده است"));
    } else {
      createSpecialSale(formData as iSpecialSale)
        .then(() => {
          message.success("پیشنهاد ویژه ایجاد شد");
          handleCloseModal();
        })
        .catch(() => message.error("خطایی رخ داده است"));
    }
  };

  const handleDelete = (id: number) => {
    deleteSpecialSale(id)
      .then(() => {
        message.success("پیشنهاد ویژه حذف شد");
        getSpecialSales();
      })
      .catch(() => message.error("خطایی رخ داده است"));
  };

  return (
    <section>
      <ConfigProvider direction="rtl">
        {modalSale !== null && (
          <SpecialSaleModal
            sale={modalSale}
            onClose={handleCloseModal}
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
            <LocalOfferOutlined />
            پیشنهادات ویژه
          </div>
          <Button type="primary" onClick={handleAdd}>
            <AddOutlined />
            پیشنهاد ویژه جدید
          </Button>
        </div>

        <div style={{ marginTop: "20px" }}>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Flex wrap gap={16} justify="center">
              {specialSales.map((sale) => (
                <SpecialSale
                  key={sale.id}
                  sale={sale}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </Flex>
          )}
        </div>
      </ConfigProvider>
    </section>
  );
};

export default SpecialSalePage;
