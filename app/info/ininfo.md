---
title: "このサイトについて"
---

<p style="color: red;">これは HTML タグです！</p>

<h2>Markdown の見出し</h2>

<strong>HTML の太字</strong>と<strong>Markdown の太字</strong>両方いける！

<img src="/logo.png" alt="ロゴ" width="200" height="100" />

<hr />

<h3>異なる画像サイズ</h3>

<p>以下は画像のサイズを変えてみた例です。</p>

<ul>
  <li>サイズ100px</li>
  <img src="/1.png" alt="ロゴ" width="150" height="50" />
  <li>サイズ300px</li>
  <img src="/2.png" alt="ロゴ" scale="100" />
</ul>

<hr />

<h3>リストとリンク</h3>

<ul>
  <li>これはリストアイテム1</li>
  <li>これはリストアイテム2</li>
  <li>これはリストアイテム3</li>
</ul>

<a href="https://www.google.com">Google</a> へのリンクも追加できます。

<hr />

<h3>コードブロック</h3>

<pre><code>
const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("World"));
</code></pre>
