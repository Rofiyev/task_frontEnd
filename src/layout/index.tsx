import React from "react";
import { ILayout } from "./layout.props";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function Layout({ children }: ILayout): JSX.Element {
  return <main className={`${poppins.className}`}>{children}</main>;
}
