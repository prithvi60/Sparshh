import NavbarPage from "@/components/Navbar";

import { Providers } from "../providers";
import "../globals.css";
import FloatingButton from "@/components/FloatingButton";

export const metadata = {
  title: "Sparshh Clothing (Brand)",
  description:
    "The Touch Of Elegance 🌿Embrace comfort and elegance with our curated collection of Indian prints 🌸Shipping across India.🚚",
};

export default function RootLayout({ children }) {
  return (
    <section>
      <NavbarPage />
      <Providers>{children}</Providers>
      <FloatingButton />
    </section>
  );
}
