import { getMarkdownPost } from "@/lib/getMarkdownPost";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// PostPageコンポーネント：動的にブログ投稿を表示
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getMarkdownPost(slug);

  return (
    <div className="p-8">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="mb-6 w-full max-h-[400px] object-cover rounded-xl shadow"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="mb-4 text-gray-600">著者: {post.author}</div>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
