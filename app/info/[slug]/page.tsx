import React from 'react';
import { getMarkdownContent } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export async function generateStaticParams() {
  // 必要に応じて、すべてのスラッグを取得するロジックを追加
  return []; // 例: [{ slug: 'example' }]
}

export default async function InfoPage({ params }: { params: { slug: string } }) {
  const { content, data } = await getMarkdownContent(params.slug, 'info');

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