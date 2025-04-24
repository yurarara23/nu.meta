import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header"; // ← ヘッダー読み込み！

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header /> 
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "NU.MetaCreate",
  description: "NU.MetaCreateの公式サイト",
  openGraph: {
    title: "NU.MetaCreate",
    description: "NU.MetaCreateの公式サイト",
    url: "https://nu-meta.vercel.app/",
    images: [
      {
        url: "/ogp/member.png", 
        width: 1200,
        height: 630,
        alt: "NU.MetaCreate",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NU.MetaCreate",
    description: "NU.MetaCreateの公式サイト",
    images: ["/ogp/default.png"], 
  },
};

