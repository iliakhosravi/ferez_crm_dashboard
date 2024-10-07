import { KeyOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useUser } from "../hooks";
import "../styles/loginPage.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { login, verify } = useUser();

  const onFinish = ({ phone, code }: { phone: string; code: number }) => {
    const tempPhone = `+98${phone}`;

    setLoading(true);
    if (!sent) {
      login(tempPhone)
        .then(() => {
          setSent(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      verify({ phone: tempPhone, code })
        .then(() => {
          navigate("/");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="login-container">
      <Form
        name="login_form"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "flex-end",
          }}
        >
          <span>:شماره تلفن</span>
          <Form.Item name="phone" layout="vertical" style={{ width: "100%" }}>
            <Input
              disabled={sent}
              prefix={
                <div style={{ display: "flex", gap: 5 }}>
                  <PhoneOutlined />
                  <span>+98 - </span>
                </div>
              }
            />
          </Form.Item>

          {sent && (
            <>
              <br className="loginPageLineBreak" />

              <span>:کد ارسال شده </span>
              <Form.Item
                name="code"
                layout="vertical"
                style={{ width: "100%" }}
              >
                <Input prefix={<KeyOutlined />} />
              </Form.Item>
            </>
          )}
        </div>

        <br className="loginPageLineBreak" />

        <Button type="primary" block htmlType="submit" loading={loading}>
          تایید
        </Button>
      </Form>
    </div>
  );
};

export default Login;
