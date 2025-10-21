import type { Metadata } from "next";

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
      <body className={manrope.variable}>
        <Header />
        <main className={"container"}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
