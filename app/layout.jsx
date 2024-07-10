import "./globals.css";
import {
  Lato,
  Montserrat,
  Arvo,
} from "next/font/google";

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

const protest = Arvo({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  style: "normal",
  variable: "--font-protest",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable} ${protest.variable} bg-[#ffeed2]`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
