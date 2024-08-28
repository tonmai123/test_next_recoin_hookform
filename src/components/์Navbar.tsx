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
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit text-white">Page Title</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="text-white" color="primary" href="#">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
