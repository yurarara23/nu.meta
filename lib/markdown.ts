// lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownContent(slug: string, folder: string) {
  const filePath = path.join(process.cwd(), 'app', folder, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent); // frontmatter対応
  return { data, content };
}
