// /app/blog/[slug]/page.tsx
import { posts } from "@/data/posts"; // 投稿データをインポート
import Image from "next/image";

// 投稿データをslugに基づいて取得する関数
function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

// PostPageコンポーネント：動的にブログ投稿を表示
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;  // `params`をawaitで解決
  const post = getPostBySlug(slug); // slugで投稿を取得

  if (!post) return <div>記事が見つからないっす</div>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600">著者: {post.author}</div>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />
      <p>ここに本文</p> {/* 投稿内容 */}
    </div>
  );
}

// generateMetadata：ページに関連するメタデータを生成
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<any> {
  const { slug } = await params;  // `params`をawaitで解決
  const post = getPostBySlug(slug); // slugで投稿を取得

  if (!post) {
    return {
      title: "記事が見つからないっす",
      description: "指定された記事が存在しません。",
    };
  }

}
