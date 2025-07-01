import { Inter, Limelight, Space_Grotesk } from "next/font/google";

export const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: true,
  display: "swap",
});

export const title = Limelight({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400"],
  preload: true,
  display: "swap",
});

export const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  preload: true,
  display: "swap",
});
