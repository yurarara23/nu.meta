// /app/blog/[slug]/page.tsx
import { posts } from "@/data/posts";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default function BlogPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div>記事が見つからないっす</div>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600">著者: {post.author}</div>
      <Image src={post.image} alt={post.title} width={800} height={400} className="rounded-lg mb-6" />
      {/* ここにブログ本文書くっす！ */}
      <p>ここにブログの内容を書く！</p>
    </div>
  );
}
