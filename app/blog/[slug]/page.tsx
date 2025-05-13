// app/blog/[slug]/page.tsx
import { getMarkdown } from "@/lib/getMarkdown";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import type { Metadata } from "next";

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

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getMarkdown(slug);

  return (
    <div className="p-8">
      {post.image && (
        <div className="mb-6 relative w-full h-48 sm:h-64 md:h-80 lg:h-[400px]">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="mb-4 text-gray-600">著者: {post.author}</div>

      <article className="prose lg:prose-xl mx-auto mt-6">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}

