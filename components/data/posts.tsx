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
    image: "/6new.png",
    category: "blog",
    slug: "blog",
    author: "yurarara",
    date: "2025-04-06",
  },
  {
    title: "お知らせ",
    image: "/1.png",
    category: "info",
    slug: "info",
    author: "yurarara",
    date: "2025-04-07",
  },
  {
    title: "記事２",
    image: "/2.png",
    category: "blog",
    slug: "blog",
    author: "yurarara",
    date: "2025-04-05",
  },
  {
    title: "記事3",
    image: "/3.png",
    category: "blog",
    slug: "blog",
    author: "yurarara",
    date: "2025-04-03",
  },
  {
    title: "記事4",
    image: "/4.png",
    category: "blog",
    slug: "blog",
    author: "yurarara",
    date: "2025-04-02",
  },
];
