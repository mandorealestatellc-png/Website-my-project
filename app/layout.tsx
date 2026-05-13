import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Armando Rosano | Tucson Realtor & Investor",
    template: "%s | Armando Rosano Real Estate",
  },
  description:
    "Tucson Realtor & Investor specializing in listings, land, fixers, investment properties, luxury homes, and value-add real estate. Real Broker.",
  keywords: [
    "Tucson Realtor",
    "Tucson Real Estate",
    "Tucson Investor",
    "Land for Sale Tucson",
    "Luxury Homes Tucson",
    "Fixer Uppers Tucson",
    "Armando Rosano",
    "Real Broker Tucson",
  ],
  openGraph: {
    title: "Armando Rosano | Tucson Realtor & Investor",
    description:
      "Strategic real estate for sellers, buyers, and investors in Tucson, Arizona.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf8f5]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
