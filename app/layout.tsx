import type { Metadata } from "next";
import { Fraunces, Barlow } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ 
  subsets: ["latin"], 
  display: 'swap', 
  variable: '--font-fraunces',
  weight: ['700', '900']
});

const barlow = Barlow({ 
  subsets: ["latin"], 
  display: 'swap', 
  variable: '--font-barlow',
  weight: ['600']
});


export const metadata: Metadata = {
  title: "Frontend Mentor | Sunnyside agency landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${barlow.variable}`}>{children}</body>
    </html>
  );
}
