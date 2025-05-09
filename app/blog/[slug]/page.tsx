import { getMarkdown } from "@/lib/getMarkdown";
import ReactMarkdown from "react-markdown";
import Image from "next/image"

// PostPageコンポーネント：動的にブログ投稿を表示
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

      <div className="prose prose-lg max-w-none">
         <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
