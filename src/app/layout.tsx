import type { Metadata } from "next";

import { manrope } from "@/shared/config/fonts";

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
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
