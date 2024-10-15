import { FC,useState } from "react";
import { Button , ConfigProvider, Form, Input, Modal,} from "antd";
import { AddOutlined, LocalOfferOutlined } from "@mui/icons-material";

const SpecialSalePage: FC = () => {

  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setEditModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalIsOpen(false);
  };


  return <section>

<ConfigProvider direction="rtl">
        <Modal open={editModalIsOpen} onCancel={handleCloseModal} footer={null}>
          <Form
            name="editBrandForm"
            // initialValues={brand || {}}
            // onFinish={submitEditBrand}
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
              name="tell"
              rules={[
                { required: true,type: "number", message: "لطفا قیمت قبلی را وارد کنید!" },
              ]}
            >
              <Input placeholder=" قیمت قبلی را وارد کنید" />
            </Form.Item>

            <Form.Item
              label="قیمت جدید"
              name="email"
              rules={[
                {required: true, type: "number", message: "لطفا قیمت جدید معتبر وارد کنید!" },
              ]}
            >
              <Input placeholder="قیمت جدید را وارد کنید" />
            </Form.Item>

            <Form.Item 
            label="شماره تماس" 
            name="address"
            rules={[
              {required: true, type: "number", message: "لطفا قیمت جدید معتبر وارد کنید!" },
            ]}
            >
              <Input placeholder="شماره تماس را وارد کنید" />
            </Form.Item>

            

            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              ارسال
            </Button>
          </Form>
        </Modal>
      </ConfigProvider>

 {/* ******** Header **************************    */}
    <div style={{
        width:"100%",
        height: "10vh",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        fontWeight:"bold",
        color:"#1677FF",
        borderBottom: "solid 1px #d7ebfa"
      }}>
       <div style={{display:"flex", gap:"8px"}}>
        <LocalOfferOutlined/>
       پیشنهادات ویژه
       </div>

       {/* ******** Add Ticket ***************** */}

       <Button type="primary" onClick={handleOpenModal} >
          <AddOutlined/>
          پیشنهاد ویژه جدید
        </Button>
            </div>

            
  </section>;
};

export default SpecialSalePage;
