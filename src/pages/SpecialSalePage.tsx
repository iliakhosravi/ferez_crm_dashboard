import { FC, useState } from "react";
import { Button, ConfigProvider, Form, Input, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AddOutlined, LocalOfferOutlined } from "@mui/icons-material";

const SpecialSalePage: FC = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const [fileList, setFileList] = useState([]);


  

  const handleOpenModal = () => {
    setEditModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalIsOpen(false);
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <section>
      <ConfigProvider direction="rtl">
        <Modal open={editModalIsOpen} onCancel={handleCloseModal} footer={null}>
          <Form
            name="editBrandForm"
            layout="vertical"
            style={{ textAlign: "right" }}
          >
            <Form.Item
              label="عنوان پیشنهاد"
              name="name"
              rules={[
                { required: true, message: "لطفا عنوان پیشنهاد را وارد کنید!" },
              ]}
            >
              <Input dir="rtl" placeholder="عنوان پیشنهاد را وارد کنید" />
            </Form.Item>

            <Form.Item
              label="توضیحات"
              name="description"
              rules={[
                { required: true, message: "لطفا توضیحات را وارد کنید!" },
              ]}
            >
              <Input.TextArea placeholder="توضیحات پیشنهاد را وارد کنید" />
            </Form.Item>

            <Form.Item
              label="قیمت قبلی"
              name="oldPrice"
              rules={[
                {
                  required: true,
                  message: "لطفا قیمت قبلی را وارد کنید!",
                },
              ]}
            >
              <Input placeholder="قیمت قبلی را وارد کنید" />
            </Form.Item>

            <Form.Item
              label="قیمت جدید"
              name="newPrice"
              rules={[
                {
                  required: true,
                  message: "لطفا قیمت جدید معتبر وارد کنید!",
                },
              ]}
            >
              <Input placeholder="قیمت جدید را وارد کنید" />
            </Form.Item>

            <Form.Item
              label="شماره تماس"
              name="contact"
              rules={[
                {
                  required: true,
                  message: "لطفا شماره تماس معتبر وارد کنید!",
                },
              ]}
            >
              <Input placeholder="شماره تماس را وارد کنید" />
            </Form.Item>

            <Form.Item label="آپلود تصویر" name="upload">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleUploadChange}
                beforeUpload={() => false} // Prevents automatic upload
              >
                {fileList.length >= 1 ? null : (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>آپلود</div>
                  </div>
                )}
              </Upload>
            </Form.Item>

            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              ارسال
            </Button>
          </Form>
        </Modal>
      </ConfigProvider>

      {/* ******** Header ************************** */}
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

        {/* ******** Add Special Sale ***************** */}
        <Button type="primary" onClick={handleOpenModal}>
          <AddOutlined />
          پیشنهاد ویژه جدید
        </Button>
      </div>


    </section>
  );
};

export default SpecialSalePage;
