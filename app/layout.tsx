import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Geist } from "next/font/google";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist",
  display: "swap",
});

const notoDeva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
  variable: "--font-deva",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baatwa — Verified drivers for your trucks",
  description:
    "Baatwa connects Indian fleet owners with KYC-verified, GPS-tracked drivers for individual trip gigs. No contracts. No idle trucks.",
  keywords: [
    "truck drivers",
    "fleet owners",
    "gig drivers",
    "verified drivers",
    "GPS tracking",
    "India logistics",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hi"
      className={`${archivo.variable} ${geist.variable} ${notoDeva.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
