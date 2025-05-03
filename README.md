
#  Next.js 15 エラーと対処法

##  発生したエラー

```
Type error: Type 'Props' does not satisfy the constraint 'PageProps'.
  Types of property 'params' are incompatible.
    Type '{ slug: string; }' is missing the following properties from type 'Promise': then, catch, finally, [Symbol.toStringTag]
```

##  原因

Next.js 15 では、**App Router の `params` が Promise で返される** ように仕様変更されたっす。そのため、従来のように同期的なオブジェクトとして扱うと型エラーが発生するっす。

##  解決方法

### 修正前（エラーが出る）

```tsx
export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug); //  `params`は同期じゃない
}
```

### 修正後（OK！）

```tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug); //  OK！
}
```

##  補足

- `params` を `await` する必要がある！
- `generateMetadata` の中でも同じように `await params` する必要ありっす
- `Promise<any>` じゃなくて、ちゃんと型を定義しよう（例: `Promise<{ slug: string }>`）

## 🔧 ESLintエラー

エラー：
```
Unexpected any. Specify a different type.
```

解決：
```tsx
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  // ...
}
```

Next.js 15 では動的パラメータが非同期になったっす。  
App Router で `params` を使うときは `await` を忘れずに
