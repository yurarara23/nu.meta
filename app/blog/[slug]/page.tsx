// /app/blog/[slug]/page.tsx
import { getMarkdownPost } from "@/lib/getMarkdownPost";
import ReactMarkdown from "react-markdown";

// PostPageコンポーネント：動的にブログ投稿を表示
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;  // `params`をawaitで解決
  const post = getMarkdownPost(slug);// slugで投稿を取得
    

  if (!post) return <div>記事が見つからないっす</div>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600">著者: {post.author}</div>
      <ReactMarkdown >{post.content}</ReactMarkdown>
    </div>
  );
}

