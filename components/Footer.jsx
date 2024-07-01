import Link from "next/link";
import ButtonComponent from "./ButtonComponent";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-between w-full h-auto gap-10 px-6 py-5 mx-auto md:gap-5 md:flex-row max-w-screen-2xl sm:px-10 md:py-8 xl:py-10">
      <div className="flex flex-col items-center justify-center w-full gap-5 sm:items-start sm:justify-start">
        <h2 className="w-full text-lg font-bold leading-8 tracking-wide text-center md:text-start font-montserrat md:text-xl xl:text-3xl">
        We are Bridal Blouse and Hand Embroidery Specialist 🧵 ✨
        <br/>
        We will make your special days more special with our tailoring works ✂️ 🌟
        </h2>
        <Link target="_blank" href="https://wa.me/9840884460?text=Hi%20team,%20I'd%20like%20your%20assistance">
          <button
            className={`block rounded-lg px-4 py-2 bg-primary hover:bg-secondary text-center text-base duration-700 delay-75 font-lato capitalize mx-auto sm:mx-0 w-full md:w-max group`}
          >
            <ButtonComponent text={"Contact us via WhatsApp"} />
          </button>
        </Link>
        {/* <Button
          color="secondary"
          className="w-full px-5 mx-auto text-base capitalize md:w-max md:text-start md:px-10 text-default md:text-lg md:mx-0"
          as={Link}
          href={"/contact"}
        >
          Contact Us
        </Button> */}
      </div>
      <div className="w-full space-y-5 md:px-20">
        <h4 className="text-lg font-medium capitalize font-protest md:text-2xl xl:text-4xl">
          Sparsh designer
        </h4>
        <ul className="space-y-2 text-base font-normal capitalize font-lato text-info">
          {/* <li>
            <Link href={"/"}>Home</Link>
          </li> */}
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
