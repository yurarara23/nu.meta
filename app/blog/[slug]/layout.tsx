import type { Metadata } from "next";
import { getMarkdown } from "@/lib/getMarkdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getMarkdown(slug);

  return {
    title: post.title,
    description: `${post.title} by ${post.author ?? "Unknown"}`,
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 100) + "...",
      url: `https://nu-meta.vercel.app/blog/${slug}`,
      images: post.image
        ? [
            {
              url: post.image.startsWith("http")
                ? post.image
                : `https://nu-meta.vercel.app${post.image}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content.slice(0, 100) + "...",
      images: post.image
        ? [post.image.startsWith("http")
            ? post.image
            : `https://nu-meta.vercel.app${post.image}`]
        : [],
    },
  };
}
