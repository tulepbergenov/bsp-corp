import { Montserrat, Roboto_Condensed } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--app-fm-montserrat",
});

export const robotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--app-fm-roboto-condensed",
});
