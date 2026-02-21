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
        ? [
            post.image.startsWith("http")
              ? post.image
              : `https://nu-meta.vercel.app${post.image}`,
          ]
        : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getMarkdown(slug);

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* ヒーロー画像セクション */}
      {post.image && (
        <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          {/* 下部へのグラデーションで見やすく */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-10">
        {/* 記事ヘッダー */}
        <header className="bg-gray-900/60 backdrop-blur-xl p-8 md:p-12 border border-white/10 shadow-2xl mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-12 h-[2px] bg-cyan-500"></span>
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
              Blog
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
            {post.title}
          </h1>

          {/* 著者情報セクション */}
          <div className="flex items-center justify-between border-t border-white/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Image
                  src={`/icons/${post.author}.png`} // 指定のパス
                  alt={post.author || "author"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  Written by
                </p>
                <p className="text-white font-bold">{post.author}</p>
              </div>
            </div>

            {/* 投稿日などのメタ情報（もしあれば） */}
            <div className="text-right hidden sm:block">
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Published
              </p>
              <p className="text-cyan-500 font-mono text-sm">{post.date}</p>
            </div>
          </div>
        </header>

        {/* 記事本文 */}
        <article
          className="prose prose-invert prose-cyan lg:prose-xl mx-auto max-w-none 
          prose-headings:tracking-tighter prose-headings:italic
          prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-white/10
          prose-img:rounded-3xl shadow-cyan-500/5"
        >
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
