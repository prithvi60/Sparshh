"use client";
import { usePathname } from "next/navigation";
import NavbarPage from "./Navbar";

const DefaultNavbvar = () => {
  const path = usePathname();
  console.log(path);
  const isHome =
    path == "/studio/structure" ||
    "/studio/vision" ||
    "/studio/studio/schedules/date";
  return !isHome ? <NavbarPage/> :  <div>{""}</div>;
};

export default DefaultNavbvar;
