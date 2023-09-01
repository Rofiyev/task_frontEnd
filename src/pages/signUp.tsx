import React, { useEffect } from "react";
import Layout from "../layout";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import SEO from "../seo/seo";
import { Col, Row, Typography, Input, Form, Button, Space } from "antd";
import Image from "next/image";
import logo from "../assets/logo-large.png";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { IAuth } from "../interface";
import { setUser } from "../redux/auth";

export default function SignUp(): JSX.Element {
  const { Paragraph, Title } = Typography;
  const router = useRouter();
  const auth = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.user && router.push("/");
  }, [auth.user]);

  const defaultValues = {
    IVV: "",
    VII_Administration: "",
    District_IIB: "",
    login: "",
    password: "",
  };

  const {
    handleSubmit,
    reset,
    control,
  } = useForm({ defaultValues });

  const onSubmit = async (data: IAuth) => {
    console.log(data);
    reset();
    router.push('/');
    dispatch(setUser(data));
  };

  return (
    <SEO title="Sign Up">
      <Layout>
        <Row style={{ height: "100vh", margin: 0 }}>
          <Col
            span={12}
            style={{
              background: "#4623E9",
              height: "100%",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                span={24}
              >
                <Image
                  src={logo}
                  width={400}
                  height={400}
                  alt="Banner"
                  style={{ objectFit: "cover" }}
                />
              </Col>
              <Col span={18}>
                <Paragraph
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quas doloremque, hic eveniet et at officiis beatae
                  eligendi sapiente! Labore, aliquam cum! Aut adipisci
                  praesentium est repellat, ipsam debitis autem temporibus saepe
                  mollitia repudiandae.
                </Paragraph>
              </Col>
            </Row>
          </Col>
          <Col
            span={12}
            style={{
              height: "100%",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Row style={{ width: "60%" }}>
                <Title level={3} style={{ textAlign: "center" }}>
                  Tizimga kirish
                </Title>
                <Form onSubmitCapture={handleSubmit(onSubmit)}>
                  <Form.Item>
                  <label style={{ margin: "0 0 0 2px" }} >
                    IVV
                  </label>
                    <Controller
                      name="IVV"
                      control={control}
                      rules={{ 
                        required: true ,
                      
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          allowClear
                          size="large"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item>
                  <label style={{ margin: "8px 0 8px 2px" }} >
                    IIV Boshqarmasi
                  </label>
                    <Controller
                      name="VII_Administration"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          allowClear
                          size="large"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item>
                  <label style={{ margin: "8px 0 8px 2px" }} >
                    Tuman IIBo`limi
                  </label>

                    <Controller
                      name="District_IIB"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          allowClear
                          size="large"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item>
                  <label style={{ margin: "0 0 8px 2px" }} >
                    Login
                  </label>

                    <Controller
                      name="login"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder="@username"
                          allowClear
                          size="large"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item>
                  <label style={{ margin: "8px 0 8px 2px" }} >
                    Password
                  </label>
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: true,  minLength:8 }}
                      render={({ field }) => (
                        <Input.Password
                          {...field}
                          placeholder="********"
                          allowClear
                          size="large"
                        />
                      )}
                    />
                  </Form.Item>

                  <Space
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      margin: "4px 0",
                    }}
                  >
                    <Link href="/signIn">Hisobingiz bormi?</Link>
                  </Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", height: "40px" }}
                  >
                    Kirish
                  </Button>
                </Form>
              </Row>
            </Row>
          </Col>
        </Row>
      </Layout>
    </SEO>
  );
}
