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
        <NavbarItem>
          <div className="w-14">
            <img className=" rounded-full" src="https://i.pinimg.com/564x/b0/47/6d/b0476df3a01539422497fdb3c8ff9c24.jpg" alt="" />
          </div>
            
        </NavbarItem>
        <NavbarItem>
          <div className="gris">
            <h3 className="font-medium">Airton Sampayo</h3>
            <p className="text-sm">Trabajador</p>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}