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
    title: "記事1",
    image: "/1.png",
    category: "blog",
    slug: "hello",
    author: "yurarara",
    date: "2025-04-01",
  },
  {
    title: "記事2",
    image: "/2.png",
    category: "blog",
    slug: "typescript-tips",
    author: "yurarara",
    date: "2025-04-02",
  },
  {
    title: "記事3",
    image: "/3.png",
    category: "blog",
    slug: "healthy-habits",
    author: "yurarara",
    date: "2025-04-03",
  },
  {
    title: "記事4",
    image: "/4.png",
    category: "blog",
    slug: "japan-trip",
    author: "yurarara",
    date: "2025-04-04",
  },
  {
    title: "記事5",
    image: "/5.png",
    category: "blog",
    slug: "ramen-guide",
    author: "yurarara",
    date: "2025-04-05",
  },
  {
    title: "記事6",
    image: "/6.png",
    category: "blog",
    slug: "react-hooks",
    author: "yurarara",
    date: "2025-04-06",
  },
  {
    title: "お知らせ",
    image: "/7.png",
    category: "info",
    slug: "nextjs-tutorial",
    author: "yurarara",
    date: "2025-04-07",
  },
];
