import { posts } from "../data/posts"; // ← 投稿データをインポート
import PostCard from "./PostCard";

const BlogSection = () => (
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

export default BlogSection;
