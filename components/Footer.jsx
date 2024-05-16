import { Button } from "@nextui-org/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-between w-full h-auto gap-10 px-12 py-10 md:gap5 md:flex-row">
      <div className="w-full space-y-5">
        <h2 className="w-full text-lg font-bold leading-8 tracking-wide text-center md:text-start font-montserrat md:text-xl xl:text-3xl">
          🌿Embrace comfort and elegance with our curated collection of Indian
          prints🌸 Shipping across India.🚚
        </h2>
        <Button
          color="secondary"
          className="w-full px-5 mx-auto text-base capitalize md:w-max md:text-start md:px-10 text-default md:text-lg md:mx-0"
        >
          <Link href={"/contact"}>Contact Us</Link>
        </Button>
      </div>
      <div className="w-full space-y-5 md:px-20">
        <h4 className="text-lg font-medium font-goblin md:text-xl xl:text-2xl">
          Sparshh
        </h4>
        <ul className="space-y-2 text-base font-normal capitalize font-lato text-info">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/privacyPolicy"}>privacy policy</Link>
          </li>
          <li>
            <Link href={"terms&Condition"}>terms & condition</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
