import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

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
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://nu-meta.vercel.app"), //追加
  title: "Nu.メタ創",
  description: "Nu.メタ創の公式サイト",
  openGraph: {
    title: "Nu.メタ創",
    description: "Nu.メタ創の公式サイト",
    url: "https://nu-meta.vercel.app/",
    images: [
      {
        url: "/ogp/member.png",
        width: 1200,
        height: 630,
        alt: "Nu.メタ創",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nu.メタ創",
    description: "Nu.メタ創の公式サイト",
    images: ["/ogp/member.png"],
  },
};
