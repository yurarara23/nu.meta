import React from "react";

const WhatNumSection = () => {
  return (
    <section className="relative px-6 py-12 text-white">
      {/* 背景画像レイヤー */}
      <div
        className="absolute inset-0 bg-[url('/1.png')] bg-cover bg-center z-0"
        aria-hidden="true"
      />

      {/* 半透明紫＋ぼかしレイヤー */}
      <div className="absolute inset-0 bg-purple-900/70 backdrop-blur-sm z-10" />

      {/* コンテンツ本体 */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What is Nu.Metasou?</h2>
        <p className="text-lg mb-8">
          Nu.メタ創は、VRC（VRChat）向けのワールドやギミックの制作をはじめ、3Dモデル制作やWeb開発など、デジタル分野に特化した創作活動を行う団体です。
          学生たちが集い、それぞれのスキルを持ち寄って、魅力的なワールドやユニークなギミックを協力して制作しています。
        </p>

        {/* ボタンエリア */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/project"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            target="_blank" rel="noopener noreferrer"
          >
            制作物一覧
          </a>
          <a
            href="https://yurarara23.github.io/nu.docs2.1/"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            target="_blank" rel="noopener noreferrer"
          >
            Nu.Docs2.1
          </a>
          <a
            href="/member"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            target="_blank" rel="noopener noreferrer"
          >
            メンバー個別ページ
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatNumSection;

