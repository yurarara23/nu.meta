// pages/terms.tsx
import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>利用規約 | Nu.メタ創</title>
      </Head>
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">利用規約</h1>
        <p className="mb-4">
          この利用規約（以下、「本規約」といいます。）は、Nu.メタ創（以下、「当サイト」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">第1条（適用）</h2>
        <p className="mb-4">
          本規約は、ユーザーと当サイトとの間の本サービスの利用に関わる一切の関係に適用されます。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">第2条（禁止事項）</h2>
        <p className="mb-4">ユーザーは、以下の行為をしてはなりません。</p>
        <ul className="list-disc list-inside mb-4">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当サイトの運営を妨害する行為</li>
          <li>その他、当サイトが不適切と判断する行為</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">第3条（免責事項）</h2>
        <p className="mb-4">
          当サイトは、本サービスに事実上または法律上の瑕疵がないことを保証しません。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          第4条（規約の変更）
        </h2>
        <p className="mb-4">
          当サイトは、必要と判断した場合には、ユーザーに通知することなく本規約を変更できるものとします。
        </p>

        <p className="mt-10">最終更新日：2025年5月</p>
      </main>
    </>
  );
}
