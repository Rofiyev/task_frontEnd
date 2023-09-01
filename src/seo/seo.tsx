import Head from "next/head";
import React from "react";
import { I_SEO } from "./seo.props";

export default function SEO({ children, title = "Admin Panel" }: I_SEO) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href={
            "https://i.pinimg.com/originals/40/98/83/409883b1a0569105e6327ecf87232ed5.jpg"
          }
          type="image/x-icon"
        />
      </Head>
      {children}
    </>
  );
}
