import { Cairo, Lexend, Inter } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});
const cairoClass = cairo.className;
const lexendClass = lexend.className;
const interClass = inter.className;
export { cairoClass, lexendClass, interClass };
