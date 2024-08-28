import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex justify-between justify-items-center w-full h-16 px-4 bg-gray-700">
      <div className="pt-4">
        <p className="font-bold text-inherit text-white">Page Title</p>
      </div>
      <div className="pt-2">
        <Button as={Link} className="text-white" color="primary" href="#">
          Login
        </Button>
      </div>
    </div>
  );
}
