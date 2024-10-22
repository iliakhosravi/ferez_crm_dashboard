/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  Modal,
  Upload,
} from "antd";

import { PlusOneOutlined } from "@mui/icons-material";
import { FC, useEffect, useState } from "react";
import useCategory, { iCategory } from "../../hooks/useCategory";

const CategoryModal: FC<{
  category: iCategory | null;
  onClose: () => void;
  onSubmit: (data: iCategory, fileList: any[]) => void;
}> = ({ category, onClose, onSubmit }) => {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [btnIsLoading, setBtnIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [form] = Form.useForm();

  const { getCategory } = useCategory();

  useEffect(() => {
    if (JSON.stringify(category) !== JSON.stringify({})) {
      setLoadingData(true);
      getCategory(category?.id || 0).then((res) => {
        const cat = res;

        form.setFieldsValue(cat);

        setFileList([
          {
            uid: cat.id,
            name: `image-${cat.id}`,
            status: "done",
            url: cat?.cdn_image || cat?.image,
          },
        ]);

        setLoadingData(false);
      });
    }
  }, [category, form, getCategory]);

  const handleUploadChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const handleFormSubmit = (values: iCategory) => {
    const temp = JSON.parse(JSON.stringify(values));

    if (category?.id) {
      temp.id = category.id;
    }

    temp.brand_id = Number(localStorage.getItem("brand-id") || 0);

    setBtnIsLoading(true);
    onSubmit(temp, fileList);
    setBtnIsLoading(false);
  };

  // const submitEditBrand: FormProps<iCategory>["onFinish"] = (values) => {
  //   setLoading(true);
  //   if (category) {
  //     // Edit
  //     return;
  //   }

  //   const brandId = localStorage.getItem("brand-id") || 0;
  //   addCategory({ ...values, brand_id: Number(brandId) }).then(() => {
  //     message.success("دسته بندی شما ایجاد شد");
  //     setLoading(false);
  //     onclose();
  //   });
  // };

  return (
    <ConfigProvider direction="rtl">
      <Modal
        open={category !== null}
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
            label="نام دسته بندی"
            name="name"
            rules={[
              { required: true, message: "لطفا نام دسته بندی را وارد کنید!" },
            ]}
          >
            <Input dir="rtl" placeholder="نام دسته بندی را وارد کنید" />
          </Form.Item>

          <Form.Item
            label="ترتیب"
            name="sort"
            rules={[
              { required: true, message: "لطفا ترتیب دسته بندی را وارد کنید!" },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              dir="rtl"
              placeholder="ترتیب دسته بندی"
            />
          </Form.Item>

          <Form.Item label="آپلود تصویر" name="images">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={handleUploadChange}
              beforeUpload={() => false}
              multiple
            >
              {fileList.length >= 1 ? null : (
                <div>
                  <PlusOneOutlined />
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

export default CategoryModal;
