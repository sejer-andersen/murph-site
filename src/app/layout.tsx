import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Murph – Buy Time. For the First Time.",
  description:
    "Murph is the AI execution partner for the top 1%. We design, build, and maintain the systems that buy you time. For the first time.",
  openGraph: {
    title: "Murph – Buy Time. For the First Time.",
    description:
      "Murph is the AI execution partner for the top 1%. We design, build, and maintain the systems that buy you time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murph – Buy Time. For the First Time.",
    description:
      "Murph is the AI execution partner for the top 1%. We design, build, and maintain the systems that buy you time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lato.variable} relative font-sans text-base antialiased`}
        style={{ wordSpacing: "0.02em", fontFamily: "var(--font-lato), var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
