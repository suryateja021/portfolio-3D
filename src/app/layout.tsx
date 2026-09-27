import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { BackgroundScene } from "@/components/canvas/BackgroundScene";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surya Teja | Frontend & Full Stack Developer",
  description: "Premium portfolio of Surya Teja, displaying cinematic and performant web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} antialiased dark`}>
      <body className="bg-[#050505] text-white min-h-screen flex flex-col relative w-full selection:bg-rose-500/30 selection:text-white">
        <BackgroundScene />
        <SmoothScrollProvider>
          <div className="relative z-10 flex flex-col min-h-screen w-full">
            <Navbar />
            <main className="flex-grow w-full">{children}</main>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
