// app/blog/page.tsx
import { getAllMarkdown } from "@/lib/getAllMarkdown";
import PostCard from "@/components/PostCard";

const BlogPage = () => {
  const posts = getAllMarkdown(); // ビルド時に取得される想定

  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 50);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2">
        {latestPosts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
