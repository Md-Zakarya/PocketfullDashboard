import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PocketFull Dashboard",
  description: "Assesment for Internship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
        </body>
    </html>
  );
}
