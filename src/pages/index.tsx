import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "antd";
import Layout from "../layout";
import SEO from "../seo/seo";
import { useAppSelector } from "../redux/hooks";
import { IAuth, IUser } from "../interface";

export default function Home(): JSX.Element {
  const router = useRouter();
  const auth: IUser | null = useAppSelector(({ auth }) => auth.user);
  console.log(auth);

  useEffect(() => {
    if (!auth) router.push("/signIn");
    else router.push("/");
  }, [auth]);

  return (
    <SEO title="Admin Panel">
      <Layout>
        <h1>Hello world!!</h1>
        <Button type="primary">Button</Button>
      </Layout>
    </SEO>
  );
}
