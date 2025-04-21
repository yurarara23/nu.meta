import React from 'react';
import { getMarkdownContent } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type Props = {
  params: { slug: string }
};

export default function InfoPage({ params }: Props) {
  const { content, data } = getMarkdownContent(params.slug, 'info');

  return (
    <main className="prose dark:prose-invert mx-auto p-4">
      <h1>{data.title}</h1>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </main>
  );
}
