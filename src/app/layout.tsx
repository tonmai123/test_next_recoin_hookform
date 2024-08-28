import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/์Navbar";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`dark ` + inter.className}>{children}</body> */}
      <body className={`dark ` + inter.className}>
        <div className="flex">
          <div className="flex-none w-60 bg-gray-600">
            <Menu></Menu>
          </div>
          <div className="grow">
            <Navbar></Navbar>
            <div className="min-h-dvh bg-gray-400">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
