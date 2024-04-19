import type { Metadata } from "next";
import { Gelasio } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import './layout.sass'

const inter = Gelasio({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "Europe, Nato, UN",
  description: "Gigolol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bgbg">
          <Image src={"/static/images/europe.jpg"} layout='fill' objectFit="cover" alt="europe" />
          <div className="overlay"></div>
        </div>
        <div className="ch">
          {children}
        </div>
      </body>
    </html>
  );
}
