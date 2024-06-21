"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

// const menuItems = [
//   { ref: "/", menuTitle: "home" },
//   { ref: "/contact", menuTitle: "contact" },
// ];

function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [percent, setPercent] = useState(null);
  const router = useRouter();
  const path = usePathname();

  const handleClick = (value, ref) => {
    router.push(`${ref}`);
  };
  const handleClickMobile = (value, ref) => {
    setIsMenuOpen(false);
    router.push(`${ref}`);
  };

  const handleScroll = () => {
    const ele = document.body;
    const scrollPosition = window.scrollY; // => scroll position
    let percentage =
      ((scrollPosition + window.innerHeight) / ele.clientHeight) * 100;
    setPercent(Math.trunc(percentage));
  };

  // Scroll based color change side effect

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      isBlurred="false"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-full bg-info border-info"
      classNames={{
        base: [
          `${
            percent >= 0 && percent <= 25
              ? "!bg-transparent shadow-none"
              : "bg-info shadow-md"
          } fixed top-0 left-0 transition-all duration-500 ease-linear`,
        ],
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
      // position="sticky"
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
            className="object-cover object-center transition-all duration-700 ease-in-out rounded-full shadow-md cursor-pointer hover:scale-110 !z-[1000]"
            // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onClick={() => router.push("/")}
          />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          // className="justify-end sm:hidden hover:animate-pulse text-success"
          className={` ${percent >= 0 && percent <= 25 ? "bg-success text-info" : "text-success"} !h-auto px-2 py-5 rounded-full  w-max  justify-end sm:hidden hover:animate-pulse transition-colors duration-700 ease-linear`}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden gap-6 text-base sm:flex font-lato text-info md:text-lg"
        justify="end"
      >
        {/* {menuItems.map((item, id) => ( */}
        <NavbarItem isActive={path === "/contact"}>
          <div
            className="capitalize !z-[1000] text-success cursor-pointer text-xl font-semibold"
            onClick={() => handleClick("contact", "/contact")}
          >
            contact
          </div>
        </NavbarItem>
        {/* ))} */}
      </NavbarContent>
      <NavbarMenu
        className="!bg-primary !bg-opacity-60 items-center !z-[1000]"
        motionProps={{
          variants: {
            enter: {
              x: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: 500,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        {/* {menuItems.map((item, index) => ( */}
        <NavbarMenuItem isActive={path === "/contact"}>
          <div
            className="w-full !h-auto pt-5 font-medium capitalize font-lato text-default cursor-pointer"
            onClick={() => handleClickMobile("contact", "/contact")}
          >
            contact
          </div>
        </NavbarMenuItem>
        {/* ))} */}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarPage;
