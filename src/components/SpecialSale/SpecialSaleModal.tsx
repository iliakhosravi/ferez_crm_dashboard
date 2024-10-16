/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined } from "@ant-design/icons";
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
import { FC, useEffect, useState } from "react";
import { useSpecialSale } from "../../hooks";
import useCategory, { iCategory } from "../../hooks/useCategory";
import { iSpecialSale } from "../../hooks/useSpecialSale";

const SpecialSaleModal: FC<{
  sale: iSpecialSale | null;
  onClose: () => void;
  onSubmit: (data: iSpecialSale, fileList: any[]) => void;
}> = ({ sale, onClose, onSubmit }) => {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [btnIsLoading, setBtnIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [categories, setCategories] = useState<iCategory[]>([]);
  const [form] = Form.useForm();

  const { getGeneralCategories } = useCategory();
  const { showSpecialSale } = useSpecialSale();

  useEffect(() => {
    getGeneralCategories().then((res) => setCategories(res));

    if (JSON.stringify(sale) !== JSON.stringify({})) {
      setLoadingData(true);
      showSpecialSale(sale?.id || 0).then((res) => {
        const specialSale = res;

        form.setFieldsValue(specialSale);

        const formattedImages = specialSale?.images?.map((image: any) => ({
          uid: image.id,
          name: `image-${image.id}`,
          status: "done",
          url: image.cdn_image || image.src,
        }));

        setFileList(formattedImages as any);
        setLoadingData(false);
      });
    }
  }, [sale, form, getGeneralCategories, showSpecialSale]);

  const handleUploadChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const handleFormSubmit = (values: iSpecialSale) => {
    const temp = JSON.parse(JSON.stringify(values));

    if (sale?.id) {
      temp.id = sale.id;
    }

    setBtnIsLoading(true);
    onSubmit(temp, fileList);
    setBtnIsLoading(false);
  };

  return (
    <ConfigProvider direction="rtl">
      <Modal
        open={sale !== null}
        onCancel={onClose}
        footer={null}
        loading={loadingData}
      >
        <Form
          form={form}
          name="specialSaleForm"
          layout="vertical"
          onFinish={handleFormSubmit}
          style={{ textAlign: "right" }}
        >
          <Form.Item
            label="عنوان پیشنهاد"
            name="title"
            rules={[
              { required: true, message: "لطفا عنوان پیشنهاد را وارد کنید!" },
            ]}
          >
            <Input dir="rtl" placeholder="عنوان پیشنهاد را وارد کنید" />
          </Form.Item>

          <Form.Item
            label="دسته بندی محصول"
            name="category_id"
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
            label="توضیحات"
            name="description"
            rules={[{ required: true, message: "لطفا توضیحات را وارد کنید!" }]}
          >
            <Input.TextArea placeholder="توضیحات پیشنهاد را وارد کنید" />
          </Form.Item>

          <Form.Item
            label="قیمت"
            name="price"
            rules={[{ required: true, message: "لطفا قیمت معتبر وارد کنید!" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="قیمت را وارد کنید"
            />
          </Form.Item>

          <Form.Item
            label="درصد تخفیف"
            name="percent"
            rules={[
              { required: true, message: "لطفا درصد تخفیف را وارد کنید!" },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="درصد تخفیف را وارد کنید"
            />
          </Form.Item>

          <Form.Item
            label="تعداد"
            name="count"
            rules={[
              { required: true, message: "لطفا تعداد محصولات را وارد کنید!" },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="تعداد محصولات را وارد کنید"
            />
          </Form.Item>

          <Form.Item
            label="شماره تماس"
            name="contact"
            rules={[
              { required: true, message: "لطفا شماره تماس معتبر وارد کنید!" },
            ]}
          >
            <Input placeholder="شماره تماس را وارد کنید" />
          </Form.Item>

          <Form.Item label="آپلود تصاویر" name="images">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={handleUploadChange}
              beforeUpload={() => false}
              multiple
            >
              {fileList.length >= 5 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>آپلود</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Button
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            loading={btnIsLoading}
          >
            ارسال
          </Button>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};

export default SpecialSaleModal;
