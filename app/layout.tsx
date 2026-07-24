import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precious Okoro",
  description:
    "Frontend Software Engineer specializing in React, Next.js and TypeScript.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-slate-950 text-white`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}