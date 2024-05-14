"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import Image from "next/image";

function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "home",
    "contact"
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="bg-info border-b-2 border-info !px-0"
    >
      <NavbarContent>
        <NavbarBrand className="">
          {/* <AcmeLogo /> */}
          {/* <p className="font-bold text-default font-montserrat text-lg md:text-xl capitalize">
            sparshh
          </p> */}
          <Image
            alt="Logo"
            src={"/sparshh_logo.jpg"}
            height={50}
            width={50}
            className="object-cover object-center rounded-full shadow-md shadow-default hover:scale-110 cursor-pointer transition-all duration-700 ease-in-out"
          />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden justify-end hover:animate-pulse text-success"
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-6 font-lato text-info text-base md:text-lg"
        justify="end"
      >
        <NavbarItem isActive>
          <Link color="success" href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="success" href="#">
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="!bg-primary !bg-opacity-60 items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-lato font-medium pt-5 capitalize text-default"
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

export default NavbarPage;
