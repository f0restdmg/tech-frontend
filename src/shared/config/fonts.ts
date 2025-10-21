import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "./assets/manrope-v20-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/manrope-v20-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/manrope-v20-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-family-main",
  display: "swap",
});
