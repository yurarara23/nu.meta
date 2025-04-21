import React from 'react';
import { getMarkdownContent } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type Props = {
  params: { slug: string }
};

export default async function BlogPage({ params }: Props) {
  const { content, data } = await getMarkdownContent(params.slug, 'blog');

  return (
    <main className="prose dark:prose-invert mx-auto p-4">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </main>
  );
}
