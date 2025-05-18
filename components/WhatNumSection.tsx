import React from "react";

const WhatNumSection = () => {
  return (
    <section className="px-6 py-12 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What is Nu.Metasou?</h2>
        <p className="text-lg mb-8">
          Nu.Metasouは、VRC（VRChat）向けのワールドやギミックの制作をはじめ、3Dモデル制作やWeb開発など、デジタル分野に特化した創作活動を行う団体です。
          学生たちが集い、それぞれのスキルを持ち寄って、魅力的なワールドやユニークなギミックを協力して制作しています。
        </p>

        {/* 横並びボタンエリア */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
  href="https://example.com/1"
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

        </div>
      </div>
    </section>
  );
};

export default WhatNumSection;
