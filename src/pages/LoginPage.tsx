import { PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks";
import "../styles/loginPage.css";
import LotilAnimation from '../assets/lotties/Animation - 1728726174132.json';
import Lottie from 'react-lottie';
import BG from '../assets/img/bg.png';
import Cookies from "js-cookie";

 

const Login = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const { login, verify } = useUser();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

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

  const handleChangeNumber = () => {
    setSent(false);
  };


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LotilAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="login-container">
      <div className="login-section01" style={{backgroundImage:`url(${BG})`}}>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
          </div>
      <div className="login-section02">
        <div className="login-section2-content">
        به فرز خوش آمدید

        </div>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {sent ? (
              <Button
                type="link"
                style={{ padding: 0 }}
                onClick={handleChangeNumber}
              >
                تغییر شماره
              </Button>
            ) : (
              <div />
            )}
            <span>:شماره تلفن</span>
          </div>
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
                <Input.OTP length={5} />
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
      
    </div>
  );
};

export default Login;
