import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App({ menuItems }: { menuItems: any }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const currentUrl = window.location.pathname;
    menuItems.forEach((element: any) =>
      element.subMenu.forEach((e: any) => {
        if (e.link === currentUrl) {
          setTitle(e.title);
        }
      })
    );
  }, [title]);

  return (
    <div className="flex justify-between justify-items-center w-full h-16 px-4 bg-gray-700">
      <div className="pt-4">
        <p className="font-bold text-inherit text-white">{title}</p>
      </div>
      <div className="pt-2">
        <Button as={Link} className="text-white" color="primary" href="/login">
          Login
        </Button>
      </div>
    </div>
  );
}
