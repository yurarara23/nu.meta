import SectionHeader from "./SectionHeader";
import ButtonLink from "./ButtonLink";

const AboutUs = () => {
  return (
    <section
      className="relative px-6 py-12 text-white"
      aria-label="What is Nu.Metasou section"
    >
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <SectionHeader
          title="About Us"
          description={`Nu.メタ創は、VRC（VRChat）向けのワールドやギミックの制作をはじめ、
3Dモデル制作やWeb開発など、デジタル分野に特化した創作活動を行うプロジェクト団体です。`}
        />

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <ButtonLink href="https://numa-meta.com/posts/blogs/metasou/">
            活動紹介
          </ButtonLink>

          <ButtonLink href="/member">メンバー紹介</ButtonLink>

          <ButtonLink href="https://yurarara23.github.io/NewDocs/">
            部内ドキュメント
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
