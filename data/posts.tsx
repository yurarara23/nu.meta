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
    slug: "blog1",
    author: "yurarara",
    date: "2025-04-06",
  },
  {
    title: "公式ページ解説",
    image: "/1.png",
    category: "blog",
    slug: "open",
    author: "yurarara",
    date: "2025-05-06",
  },
];
