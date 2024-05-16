import { Goblin_One, Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import DefaultNavbvar from "@/components/DefaultNavbvar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-montserrat",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-lato",
});

const goblin = Goblin_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-goblin",
})

export const metadata = {
  title: "Sparshh Clothing (Brand)",
  description:
    "The Touch Of Elegance 🌿Embrace comfort and elegance with our curated collection of Indian prints 🌸Shipping across India.🚚",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable} ${goblin.variable} bg-default`}>
      <body>
        {/* <NavbarPage /> */}
        {/* <DefaultNavbvar/> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
