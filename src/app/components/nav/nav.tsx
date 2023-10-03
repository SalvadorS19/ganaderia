'use client'
import "./nav.css";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link className="text-xl flex gap-2" href="/" color="foreground">
            Le Vache<span className="text-inherit font-bold">Patineuse</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-5" justify="end">
        <NavbarItem isActive>
          <Link color="secondary" href="/" aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#about-us" color="foreground">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contactanos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="login" variant="flat">
            Ingresar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}