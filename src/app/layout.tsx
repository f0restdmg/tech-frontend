import type { Metadata } from "next";
import clsx from "clsx";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { manrope } from "@/shared/config/fonts";

import "./styles/index.css";

export const metadata: Metadata = {
  title: "HardwareBench",
  description: "HardwareBench",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={clsx(manrope.variable, "container")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
