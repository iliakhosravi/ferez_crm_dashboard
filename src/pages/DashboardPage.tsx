import { EditOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import { Button, ConfigProvider, Flex, Form, Input, Modal, Spin } from "antd";
import { FC, useEffect, useState } from "react";
import useBrand, { iBrand } from "../hooks/useBrand";

const DashboardPage: FC = () => {
  const { loading, getBrand, editBrand } = useBrand();
  const [brand, setBrand] = useState<iBrand | null>(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    getBrand().then((res: iBrand) => {
      setBrand(res);
    });
  }, [getBrand]);

  const submitEditBrand: FormProps<iBrand>["onFinish"] = (values) => {
    editBrand(values).then((data) => {
      setBrand(data);
      handleCloseModal();
    });
  };

  const handleOpenModal = () => {
    setEditModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalIsOpen(false);
  };

  const brandDetails = [
    { label: "درباره ما", key: "description" },
    { label: "آدرس", key: "address" },
    { label: "شماره تماس", key: "tell" },
    { label: "ایمیل", key: "email" },
    { label: "تلگرام", key: "telegram" },
    { label: "واتساپ", key: "whatsapp" },
    { label: "وب سایت", key: "site" },
    { label: "اینستاگرام", key: "instagram" },
    { label: "لینکدین", key: "linkedin" },
  ];

  return (
    <section>
      <ConfigProvider direction="rtl">
        <Modal open={editModalIsOpen} onCancel={handleCloseModal} footer={null}>
          <Form
            name="editBrandForm"
            initialValues={brand || {}}
            onFinish={submitEditBrand}
            layout="vertical"
            style={{ textAlign: "right" }}
          >
            <Form.Item
              label="نام برند"
              name="name"
              rules={[
                { required: true, message: "لطفا نام برند را وارد کنید!" },
              ]}
            >
              <Input dir="rtl" placeholder="نام برند را وارد کنید" />
            </Form.Item>

            <Form.Item
              label="توضیحات"
              name="description"
              rules={[
                { required: true, message: "لطفا توضیحات را وارد کنید!" },
              ]}
            >
              <Input.TextArea placeholder="توضیحات برند را وارد کنید" />
            </Form.Item>

            <Form.Item
              label="تلفن"
              name="tell"
              rules={[
                { required: true, message: "لطفا شماره تلفن را وارد کنید!" },
              ]}
            >
              <Input placeholder="شماره تلفن را وارد کنید" />
            </Form.Item>

            <Form.Item
              label="ایمیل"
              name="email"
              rules={[
                { type: "email", message: "لطفا ایمیل معتبر وارد کنید!" },
              ]}
            >
              <Input placeholder="ایمیل را وارد کنید" />
            </Form.Item>

            <Form.Item label="آدرس" name="address">
              <Input placeholder="آدرس را وارد کنید" />
            </Form.Item>

            <Form.Item label="وب‌سایت" name="site">
              <Input placeholder="آدرس وب‌سایت را وارد کنید" />
            </Form.Item>

            <Form.Item label="اینستاگرام" name="instagram">
              <Input placeholder="آدرس اینستاگرام را وارد کنید" />
            </Form.Item>

            <Form.Item label="لینکدین" name="linkedin">
              <Input placeholder="آدرس لینکدین را وارد کنید" />
            </Form.Item>

            <Form.Item label="تلگرام" name="telegram">
              <Input placeholder="آدرس تلگرام را وارد کنید" />
            </Form.Item>

            <Form.Item label="واتساپ" name="whatsapp">
              <Input placeholder="شماره واتساپ را وارد کنید" />
            </Form.Item>

            <Button
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
              // onClick={submitEditBrand}
            >
              ارسال
            </Button>
          </Form>
        </Modal>
      </ConfigProvider>

      {loading ? (
        <Flex align="center" justify="center">
          <Spin size="large" />
        </Flex>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <div>
            <Button type="primary" onClick={handleOpenModal}>
              <EditOutlined />
              ویرایش اطلاعات برند
            </Button>
          </div>
          <div style={{
             display: "flex",
             width:"85vw",
              gap: "20px" ,
               
                alignContent:"center", 
                alignItems:"center",
                justifyContent:"start"}}>
            <img
              src={brand?.cdn_image}
              alt={brand?.name}
              style={{ maxHeight: "200px" }}
            />
            <h1>{brand?.name}</h1>

          </div>

          <div>
            {brandDetails.map(({ label, key }) => (
              <span
                key={key}
                style={{ 
                  display: "flex",
                   gap: "8px", 
                   alignItems: "center", 
                    backgroundColor: "#f5f5f5",
                    padding: '16px',
                    margin: "8px",
                    borderRadius: "8px"
                  }}
              >
                <h4>{label}:</h4>
                <p
                style={{color: (brand?.[key as keyof iBrand] == null)?"red":"black"}}
                >{(brand?.[key as keyof iBrand] == null)? 'ثبت نشده':brand?.[key as keyof iBrand]}</p>
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default DashboardPage;
