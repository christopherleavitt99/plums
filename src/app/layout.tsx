import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
'import { header } from "./components/header"';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLUMS",
  description: "The amazing personal learning management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <header />
      {children}
    </html>
  );
}
