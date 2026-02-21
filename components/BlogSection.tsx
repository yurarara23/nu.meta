import PostCard from "./PostCard";
import { getAllMarkdown } from "@/lib/getAllMarkdown";
import Link from "next/link";

const BlogSection = () => {
  const posts = getAllMarkdown();

  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div className="flex flex-col">
            <h2 className="text-5xl font-black italic tracking-tighter text-white uppercase leading-none">
              Blog
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-10 h-[2px] bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
              <p className="text-xs text-cyan-500 font-mono tracking-[0.3em] uppercase">
                Latest Insights
              </p>
            </div>
          </div>

          <Link
            href="/blog"
            className="text-xs font-bold text-gray-500 hover:text-cyan-400 transition-colors tracking-widest uppercase border-b border-gray-800 hover:border-cyan-500 pb-1"
          >
            View All Blog →
          </Link>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-x-auto gap-6 pb-12 custom-scrollbar hidden-scrollbar">
            {latestPosts.map((post) => (
              <div key={post.slug} className="min-w-[280px] md:min-w-[320px]">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
