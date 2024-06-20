import "./globals.css";
import {
  Lato,
  Montserrat,
  Protest_Revolution,
  Playfair_Display,
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

const protest = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  style: "italic",
  variable: "--font-protest",
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable} ${protest.variable} bg-default`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
