// lib/markdown.ts
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getMarkdownContent(slug: string, folder: string) {
  const filePath = path.join(process.cwd(), 'app', folder, `${slug}.md`);
  const fileContent = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return { data, content };
}