// /lib/getAllMarkdownPosts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllMarkdownPosts() {
  const dirPath = path.join(process.cwd(), "app/blog");
  const files = fs.readdirSync(dirPath);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title,
        image: data.image,
        author: data.author,
        date: data.date,
      };
    });

  return posts;
}
