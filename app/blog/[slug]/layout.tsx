import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ記事",
  description: "NU.MetaCreateのブログ記事",
  openGraph: {
    title: "ブログ記事",
    description: "ブログ内容",
    url: "https://nu-meta.vercel.app/blog/open",
    images: [
      {
        url: "/ogp/picture.png", 
        width: 1200,
        height: 630,
        alt: "NU.MetaCreate",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "記事",
    description: "記事内容",
    images: ["/ogp/picture.png"], 
  },
};

export default function Page() {}