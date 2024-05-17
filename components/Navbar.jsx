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
  const [menuBar, setMenuBar] = React.useState("home");

  const menuItems = [
    { ref: "/", menuTitle: "home" },
    { ref: "/contact", menuTitle: "contact" },
  ];

  return (
    <div className="w-full h-auto bg-info">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-info border-b-2 border-info w-full"
        classNames={{
          wrapper: "!max-w-screen-2xl mx-auto px-[1.5rem] md:px-[2rem]",
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-3",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-success",
          ],
          menuItem: [
            "flex",
            "relative",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:-bottom-3",
            "data-[active=true]:after:-left-[14px]",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:w-[5rem]",
            "data-[active=true]:after:mx-auto",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-success",
          ],
        }}
      >
        <NavbarContent>
          <NavbarBrand className="">
            {/* <p className="text-lg font-bold capitalize text-default font-montserrat md:text-xl">
            sparshh
          </p> */}
            <Image
              alt="Logo"
              src={"/sparshh_logo.jpg"}
              height={50}
              width={50}
              className="object-cover object-center transition-all duration-700 ease-in-out rounded-full shadow-md cursor-pointer shadow-default hover:scale-110 !z-[1000]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="justify-end sm:hidden hover:animate-pulse text-success"
          />
        </NavbarContent>

        <NavbarContent
          className="hidden gap-6 text-base sm:flex font-lato text-info md:text-lg"
          justify="end"
        >
          {menuItems.map((item, id) => (
            <NavbarItem isActive={item.menuTitle === menuBar} key={id}>
              <Link
                color="success"
                href={item.ref}
                aria-current="page"
                className="capitalize !z-[1000]"
                onClick={() => setMenuBar(item.menuTitle)}
              >
                {item.menuTitle}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu
          className="!bg-primary !bg-opacity-60 items-center !z-[1000]"
          motionProps={{
            variants: {
              enter: {
                x: 0,
                // opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                x: -400,
                // opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeIn",
                },
              },
            },
          }}
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={index}
              isActive={item.menuTitle === menuBar}
              onChange={() => setIsMenuOpen(false)}
            >
              <Link
                className="w-full !h-auto pt-5 font-medium capitalize font-lato text-default"
                href={item.ref}
                size="lg"
              >
                {item.menuTitle}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default NavbarPage;
