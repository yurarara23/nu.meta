// app/components/BlogSection.tsx
import PostCard from "./PostCard";
import { getAllMarkdownPosts } from "@/lib/getAllMarkdownPosts";

const BlogSection = () => {
  const posts = getAllMarkdownPosts(); // SSR context または build 時に取得

  return (
    <section className="py-8 px-6">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <div className="flex overflow-x-auto gap-4 pb-2 custom-scrollbar">
        {posts.map((post) => (
          <div key={post.slug} className="min-w-[200px] max-w-[200px]">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

