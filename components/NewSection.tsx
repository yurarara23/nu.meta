import PostCard from "./PostCard";

const posts = [
  {
    title: "お知らせ",
    image: "/hero1.png",
    category: "info",
    slug: "ininfo",
    author: "yurarara",
  },
  {
    title: "new記事1",
    image: "/1.png",
    category: "blog",
    slug: "hello",
    author: "yurarara",
  },
  {
    title: "new記事2",
    image: "/2.png",
    category: "blog",
    slug: "zero-gravity-room",
    author: "yurarara",
  },
];

const NewSection = () => (
  <section className="py-8 px-6">
    <h2 className="text-2xl font-bold mb-4">New</h2>
    <div className="flex overflow-x-auto gap-4 pb-2 custom-scrollbar">
      {posts.map((post) => (
        <div key={post.slug} className="min-w-[200px] max-w-[200px]">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  </section>
);

export default NewSection;
