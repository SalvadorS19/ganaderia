'use client'
import "./nav.css";
import React, { useState } from "react";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button, 
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/react";
import Image from 'next/image'
import { useAuth } from "@/app/services/auth.provider";

export default function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user: currentUser } = useAuth();

  const menuItems = [
    "Inicio",
    "Nosotros",
    "Contactanos",
    "Mi cuenta"
  ];

  const ProfileItem = () => {
    if (currentUser) {
      return (
        <NavbarItem className="flex">
          <Image 
            src="https://i.pinimg.com/564x/b0/47/6d/b0476df3a01539422497fdb3c8ff9c24.jpg"
            alt="profile-picture"
            height={40}
            width={50}
            className="rounded"
          ></Image>
          <div className="gris ml-2">
            <h3 className="font-medium">Airton Sampayo</h3>
            <p className="text-sm">Trabajador</p>
          </div>
        </NavbarItem>
      )
    } else {
      return (
        <NavbarItem>
          <Button 
            as={Link} 
            color="secondary" 
            href="login" 
            variant="flat"
          >
            Ingresar
          </Button>
        </NavbarItem>
      );
    }
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="text-xl flex gap-2" href="/" color="foreground">
            Le Vache<span className="text-inherit font-bold">Patineuse</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-5" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/" aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#about-us" color="foreground">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#footer">
            Contactanos
          </Link>
        </NavbarItem>
        <ProfileItem/>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}