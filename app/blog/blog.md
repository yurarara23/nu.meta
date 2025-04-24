---
title: "Markdownの力を引き出そう！"
author: "yurarara"
date: "2025-04-21"
category: "blog"
---

# Markdownの力を引き出そう！

ブログを書くとき、Markdownはとても便利な記法です。今回は、Next.jsのプロジェクト内でMarkdownがどれだけ使えるか、実際に見てみましょう！

---

## 📚 見出しとテキスト

Markdownでは、`#` の数で見出しレベルを表現します。たとえば：

### 見出しレベル3

普通の文章ももちろん書けます。**太字**や *斜体* も簡単に書けます。

---

## ✅ リスト

- 箇条書きリスト
- こうやって書くだけ
- 自動でインデントされます

1. 番号付きリストも
2. 簡単に
3. 書けちゃう！

---

## 🔗 リンクと画像

[Next.js公式サイト](https://nextjs.org/) へジャンプ！

画像も貼れます：

![Next.jsのロゴ](https://nextjs.org/static/favicon/favicon-32x32.png)

---

## 💡 コードブロック

プログラミングの記事ならコードも載せたいですよね？

### インラインコード

`npm install gray-matter` のように、インラインでもOK。

### 複数行コードブロック

```js
import matter from 'gray-matter';

const file = matter(`# Hello\nThis is a markdown file`);
console.log(file.data.title);
