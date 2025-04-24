type Post = {
    title: string;
    image: string;
    category: string;
    slug: string;
    author: string;
    date: string;
  };

export const posts: Post[] = [
  {
    title: "記事6",
    image: "/6.png",
    category: "blog",
    slug: "blog",
    author: "yurarara",
    date: "2025-04-06",
  },
  {
    title: "お知らせ",
    image: "/7.png",
    category: "info",
    slug: "info",
    author: "yurarara",
    date: "2025-04-07",
  },
];
