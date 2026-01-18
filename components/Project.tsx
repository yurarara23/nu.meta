import SectionHeader from "./SectionHeader";
import YouTubeEmbed from "./YouTubeEmbed";
import ButtonLink from "./ButtonLink";

const Project = () => {
  return (
    <section className="relative px-6 py-12 text-white">
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <SectionHeader
          title="Project"
          description={`Nu.メタ創内では、各メンバーの得意分野を組み合わせ、VRC（VRChat）向けのワールド制作をはじめ、
プロジェクト単位でゲームシステム開発、モデリング、オーディオ、映像、ポスターなど
幅広い制作活動を行っています。`}
        />

        <YouTubeEmbed videoId="HHPRAg5ijXE" title="Nu.メタ創 Project Movie" />

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <ButtonLink href="/project">制作物リンク</ButtonLink>
          <ButtonLink href="https://www.youtube.com/channel/UCP50CAz2iyb8KKa3EV5BGKw">
            公式 YouTube
          </ButtonLink>
          <ButtonLink href="https://numetaproject.booth.pm/">
            公式 Booth
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Project;
