import { posts } from "../data/posts";
import PostCard from "./PostCard";

// 日付の新しい順に並び替えて、上位5件を取得
const latestPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 5);

const NewSection = () => (
  <section className="py-8 px-6">
    <h2 className="text-2xl font-bold mb-4">New</h2>
    <div className="flex overflow-x-auto gap-4 pb-2 custom-scrollbar">
      {latestPosts.map((post) => (
        <div key={post.slug} className="min-w-[200px] max-w-[200px]">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  </section>
);

export default NewSection;

