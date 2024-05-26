import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

import toast from "react-hot-toast";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Ensure metadata is included in the head */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}


