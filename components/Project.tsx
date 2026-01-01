const Project = () => {
  return (
    <section className="relative px-6 py-12 text-white">
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Project</h2>

        <p className="text-lg mb-8 leading-relaxed">
          Nu.メタ創内では、各メンバーの得意分野を組み合わせ、VRC（VRChat）向けのワールド制作をはじめ、
          プロジェクト単位でゲームシステム開発、モデリング、オーディオ、映像、ポスターなど
          幅広い制作活動を行っています。
        </p>

        <div className="w-full aspect-video mb-8">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/HHPRAg5ijXE"
            title="Nu.メタ創 Project Movie"
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/project"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full  transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            制作物リンク
          </a>

          <a
            href="https://www.youtube.com/channel/UCP50CAz2iyb8KKa3EV5BGKw"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full  transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            公式 YouTube
          </a>

          <a
            href="https://numetaproject.booth.pm/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full  transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            公式 Booth
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
