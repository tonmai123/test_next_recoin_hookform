"use client";

import { Inter } from "next/font/google";
import "../globals.css";
import Menu from "@/components/Menu";
import { VscCopilot, VscExclude } from "react-icons/vsc";
import Providers from "@/components/Providers";
import Navbar from "@/components/์Navbar";

const inter = Inter({ subsets: ["latin"] });

const menuItems = [
  {
    title: "Menu1",
    key: "menu1",
    link: "#",
    subMenu: [
      {
        title: "Sub Menu1",
        key: "subMenu1",
        icon: VscCopilot,
        link: "/main/sub_menu_1",
      },
    ],
  },
  {
    title: "Menu2",
    key: "menu2",
    link: "#",
    subMenu: [
      {
        title: "Sub Menu2",
        key: "subMenu2",
        icon: VscExclude,
        link: "/main/sub_menu_2",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="flex-none w-60 bg-gray-600">
            <Menu menuItems={menuItems}></Menu>
          </div>
          <div className="grow w-full">
            <Navbar menuItems={menuItems}></Navbar>
            <div className="min-h-dvh bg-gray-400">
              <Providers>{children}</Providers>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
