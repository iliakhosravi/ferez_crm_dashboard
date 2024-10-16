import type { FormProps, UploadFile } from "antd";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
  Upload,
} from "antd";

import { FC, useEffect, useState } from "react";
import useCategory, { iCategory } from "../../hooks/useCategory";
import useProduct, { iProduct } from "../../hooks/useProducts";
import { UploadFileOutlined } from "@mui/icons-material";

const ProductModal: FC<{
  product: iProduct | null;
  onclose: () => void;
}> = ({ product, onclose }) => {
  const { createProduct } = useProduct();
  const { getCategories } = useCategory();

  const [categories, setCategories] = useState<iCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, [getCategories]);

  const submitEditProduct: FormProps<iProduct>["onFinish"] = (values) => {
    // setLoading(true);

    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("images[]", file.originFileObj as Blob);
    });

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    if (product && product.id) {
      //   editProduct({ ...product, ...values }).then(() => {
      //     message.success("محصول شما ویرایش شد");
      //     setLoading(false);
      //     onclose();
      //   });
      //   return;
    }

    createProduct(formData).then(() => {
      message.success("محصول شما ایجاد شد");
      setLoading(false);
      onclose();
    });
  };

  const handleImageChange = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    setFileList(newFileList);
  };

  return (
    <ConfigProvider direction="rtl">
      <Modal onCancel={onclose} footer={null}>
        <Form
          name="editProductForm"
          initialValues={product || {}}
          onFinish={submitEditProduct}
          layout="vertical"
          style={{ textAlign: "right" }}
        >
          <Form.Item
            label="نام محصول"
            name="name"
            rules={[
              { required: true, message: "لطفا نام محصول را وارد کنید!" },
            ]}
          >
            <Input dir="rtl" placeholder="نام محصول را وارد کنید" />
          </Form.Item>

          <Form.Item
            label="دسته بندی محصول"
            name="brand_category_id"
            rules={[
              {
                required: true,
                message: "لطفا دسته بندی محصول را انتخاب کنید!",
              },
            ]}
          >
            <Select
              placeholder="دسته بندی محصول را انتخاب کنید"
              loading={categories.length === 0}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </Form.Item>

          <Form.Item
            label="توضیحات محصول"
            name="description"
            rules={[
              { required: true, message: "لطفا توضیحات محصول را وارد کنید!" },
            ]}
          >
            <Input.TextArea
              dir="rtl"
              placeholder="توضیحات محصول را وارد کنید"
            />
          </Form.Item>

          <Form.Item
            label="قیمت محصول"
            name="price"
            rules={[
              { required: true, message: "لطفا قیمت محصول را وارد کنید!" },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              placeholder="قیمت محصول را وارد کنید"
              dir="rtl"
            />
          </Form.Item>

          <Form.Item
            label="واحد محصول"
            name="unit"
            rules={[
              { required: true, message: "لطفا واحد محصول را وارد کنید!" },
            ]}
          >
            <Input dir="rtl" placeholder="واحد محصول (مثلا: کیلوگرم)" />
          </Form.Item>

          <Form.Item label="لینک محصول" name="link">
            <Input dir="rtl" placeholder="لینک محصول را وارد کنید" />
          </Form.Item>

          <Form.Item label="تخفیف محصول (%)" name="off">
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              max={100}
              placeholder="میزان تخفیف را وارد کنید"
              dir="rtl"
            />
          </Form.Item>

          <Form.Item label="تصاویر محصول">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={handleImageChange}
              beforeUpload={() => false}
            >
              <UploadFileOutlined />
            </Upload>
          </Form.Item>

          <Button
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            {product ? "ویرایش محصول" : "ایجاد محصول"}
          </Button>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};

export default ProductModal;
