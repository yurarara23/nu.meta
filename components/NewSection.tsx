// app/components/NewSection.tsx
import PostCard from "./PostCard";
import { getAllMarkdown } from "@/lib/getAllMarkdown";

const NewSection = () => {
  const posts = getAllMarkdown();

  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
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
};

export default NewSection;

