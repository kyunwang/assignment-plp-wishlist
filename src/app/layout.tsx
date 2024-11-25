import WishlistCounter from "@/components/WishlistCounter";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Assignment PLP & Wishlist",
  description: "An assigment with a 2.5h limit. PLP and Wishlist with a cars as subject.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <header className="container md:mx-auto p-4">
        <nav
          className="flex"
        >
          <ul className="flex justify-between items-center w-full">
            <li>
              <a href="/">
                <Image src={'/logo.svg'} alt="logo" width={64} height={24} style={{ objectFit: "contain" }} />
              </a>
            </li>
            <li>
              <a href="/wishlist">
                <WishlistCounter />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </body>
  </html>
);


export default RootLayout;