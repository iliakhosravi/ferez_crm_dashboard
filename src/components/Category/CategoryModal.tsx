import type { FormProps } from "antd";
import { Button, ConfigProvider, Form, Input, message, Modal } from "antd";

import { FC, useState } from "react";
import useCategory, { iCategory } from "../../hooks/useCategory";

const CategoryModal: FC<{
  category: iCategory | null;
  onclose: () => void;
}> = ({ category, onclose }) => {
  const { addCategory } = useCategory();

  const [loading, setLoading] = useState<boolean>(false);

  const submitEditBrand: FormProps<iCategory>["onFinish"] = (values) => {
    setLoading(true);
    if (category) {
      // Edit
      return;
    }

    const brandId = localStorage.getItem("brand-id") || 0;
    addCategory({ ...values, brand_id: Number(brandId) }).then(() => {
      message.success("دسته بندی شما ایجاد شد");
      setLoading(false);
      onclose();
    });
  };

  return (
    <ConfigProvider direction="rtl">
      <Modal open={category !== null} onCancel={onclose} footer={null}>
        <Form
          name="editBrandForm"
          initialValues={category || {}}
          onFinish={submitEditBrand}
          layout="vertical"
          style={{ textAlign: "right" }}
        >
          <Form.Item
            label="نام دسته بندی"
            name="name"
            rules={[
              { required: true, message: "لطفا نام دسته بندی را وارد کنید!" },
            ]}
          >
            <Input dir="rtl" placeholder="نام دسته بندی را وارد کنید" />
          </Form.Item>

          <Button
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            ارسال
          </Button>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};

export default CategoryModal;
