"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import { VscCopilot, VscExclude } from "react-icons/vsc";

export default function App() {
  const menu = [
    {
      title: "Menu1",
      key: "menu1",
      link: "#",
      subMenu: [
        {
          title: "Sub Menu1",
          key: "subMenu1",
          icon: VscCopilot,
          link: "/subMenu1",
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
          link: "/subMenu2",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-center justify-items-center h-16">
        <b className="pt-2 text-4xl text-white">Logo</b>
      </div>
      <hr />
      <div>
        <Accordion selectionMode="multiple" selectedKeys={["menu1", "menu2"]}>
          {menu.map((item) => (
            <AccordionItem
              key={item.key}
              aria-label={item.title}
              title={item.title}
              className="px-4"
            >
              {item.subMenu.map((subItem) => (
                <div className="flex items-center px-4 -mt-3" key={subItem.key}>
                  <subItem.icon className="mr-2 text-white" />
                  <Link
                    className="text-white cursor-pointer"
                    href={subItem.link}
                  >
                    {subItem.title}
                  </Link>
                </div>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
