import React, { useEffect } from "react";
import Layout from "../layout";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import SEO from "../seo/seo";
import { Col, Row, Typography, Input, Form, Button, Space } from "antd";
import Image from "next/image";
import logo from "../assets/logo-large.png";
import Link from "next/link";
import { IAuth, IUser } from "../interface";
import { Controller, useForm } from "react-hook-form";
import { setUser } from "../redux/auth";

export default function SignIn(): JSX.Element {
  const { Paragraph, Title } = Typography;
  const router = useRouter();
  const auth = useAppSelector(({ auth }) => auth);
  const users = useAppSelector(({ auth }) => auth.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.user && router.push("/");
  }, [auth.user]);

  const defaultValues = {
    login: "",
    password: "",
  };
  const { handleSubmit, control } = useForm({ defaultValues });

  // Users Login
  const onSubmit = async (data: IUser) => {
    const [user_data] = users.filter(
      (user: IAuth) =>
        user.login === data.login && user.password === data.password
    );

    if (user_data) {
      dispatch(setUser(user_data));
      router.push("/");
    }
  };

  return (
    <SEO title="Sign In">
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
              <Form onSubmitCapture={handleSubmit(onSubmit)}>
                <Title level={3} style={{ textAlign: "center" }}>
                  Tizimga kirish
                </Title>
                <Form.Item>
                  <label style={{ margin: "0 0 8px 2px" }}>Login</label>
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
                  <label style={{ margin: "8px 0 8px 2px" }}>Password</label>
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: true, minLength: 8 }}
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
                    margin: "0 0 6px 0",
                  }}
                >
                  <Link href="/signUp">Yangi hisob ochish</Link>
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
          </Col>
        </Row>
      </Layout>
    </SEO>
  );
}
