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
    "Murph builds AI-powered systems that let companies buy time for the first time. We turn repetitive operations and expert decision-making into quiet infrastructure that runs in the background.",
  openGraph: {
    title: "Murph – Buy Time. For the First Time.",
    description:
      "Murph builds AI-powered systems that let companies buy time for the first time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murph – Buy Time. For the First Time.",
    description:
      "Murph builds AI-powered systems that let companies buy time for the first time.",
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
