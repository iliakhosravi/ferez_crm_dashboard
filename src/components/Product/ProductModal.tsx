/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Upload,
} from "antd";

import { PlusOneOutlined } from "@mui/icons-material";
import { FC, useEffect, useState } from "react";
import useCategory, { iCategory } from "../../hooks/useCategory";
import useProduct, { iProduct } from "../../hooks/useProducts";

const ProductModal: FC<{
  product: iProduct | null;
  readOnly?: boolean;
  onClose: () => void;
  onSubmit: (data: iProduct, fileList: any[]) => void;
}> = ({ product, onClose, onSubmit, readOnly = false }) => {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [btnIsLoading, setBtnIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [categories, setCategories] = useState<iCategory[]>([]);
  const [form] = Form.useForm();

  const { getCategories } = useCategory();
  const { getProduct } = useProduct();

  useEffect(() => {
    getCategories().then((res) => setCategories(res));

    if (JSON.stringify(product) !== JSON.stringify({})) {
      setLoadingData(true);
      getProduct(product?.id || 0).then((res) => {
        const prod = res;

        form.setFieldsValue(prod);

        const formattedImages = prod?.images?.map((image: any) => ({
          uid: image.id,
          name: `image-${image.id}`,
          status: "done",
          url: image.cdn_image || image.src,
        }));

        setFileList(formattedImages as any);
        setLoadingData(false);
      });
    }
  }, [product, getCategories, form, getProduct]);

  const handleUploadChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const handleFormSubmit = (values: iProduct) => {
    const temp = JSON.parse(JSON.stringify(values));

    if (product?.id) {
      temp.id = product.id;
    }

    setBtnIsLoading(true);
    onSubmit(temp, fileList);
    setBtnIsLoading(false);
  };

  return (
    <ConfigProvider direction="rtl">
      <Modal
        open={product !== null}
        onCancel={onClose}
        footer={null}
        loading={loadingData}
      >
        <Form
          form={form}
          name="editProductForm"
          layout="vertical"
          onFinish={handleFormSubmit}
          style={{ textAlign: "right" }}
        >
          <Form.Item
            label="نام محصول"
            name="name"
            rules={[
              { required: true, message: "لطفا نام محصول را وارد کنید!" },
            ]}
          >
            <Input
              disabled={readOnly}
              dir="rtl"
              placeholder="نام محصول را وارد کنید"
            />
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
              disabled={readOnly}
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
              disabled={readOnly}
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
              disabled={readOnly}
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
            <Input
              disabled={readOnly}
              dir="rtl"
              placeholder="واحد محصول (مثلا: کیلوگرم)"
            />
          </Form.Item>

          <Form.Item label="لینک محصول" name="link">
            <Input
              disabled={readOnly}
              dir="rtl"
              placeholder="لینک محصول را وارد کنید"
            />
          </Form.Item>

          <Form.Item label="تخفیف محصول (%)" name="off">
            <InputNumber
              disabled={readOnly}
              style={{ width: "100%" }}
              min={0}
              max={100}
              placeholder="میزان تخفیف را وارد کنید"
              dir="rtl"
            />
          </Form.Item>

          <Form.Item label="تصاویر محصول">
            <Upload
              disabled={readOnly}
              listType="picture-card"
              fileList={fileList}
              onChange={handleUploadChange}
              beforeUpload={() => false}
              multiple
            >
              {!readOnly &&
                (fileList.length >= 5 ? null : (
                  <div>
                    <PlusOneOutlined />
                    <div style={{ marginTop: 8 }}>آپلود</div>
                  </div>
                ))}
            </Upload>
          </Form.Item>

          {!readOnly && (
            <Button
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
              loading={btnIsLoading}
            >
              ارسال
            </Button>
          )}
        </Form>
      </Modal>
    </ConfigProvider>
  );
};

export default ProductModal;
