const WhatNumSection = () => {
  return (
    <section
      className="relative px-6 py-12 text-white"
      aria-label="What is Nu.Metasou section"
    >
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What is Nu.Metasou?</h2>

        <p className="text-lg mb-8 leading-relaxed">
          Nu.メタ創は、VRC（VRChat）向けのワールドやギミックの制作をはじめ、
          3Dモデル制作やWeb開発など、デジタル分野に特化した創作活動を行うプロジェクト団体です。
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://numa-meta.com/posts/blogs/metasou/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full  transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            活動紹介
          </a>

          <a
            href="/member"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full  transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            メンバー紹介
          </a>

          <a
            href="https://yurarara23.github.io/NewDocs/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full  transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            部内ドキュメント
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatNumSection;
