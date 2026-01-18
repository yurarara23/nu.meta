import SectionHeader from "./SectionHeader";
import ButtonLink from "./ButtonLink";
import ImageGrid from "./ImageGrid";

const New = () => {
  const images = [
    "/home/1.jpg",
    "/home/2.png",
    "/home/3.png",
    "/home/4.png",
    "/home/5.png",
    "/home/6.png",
    "/home/7.png",
    "/home/8.png",
    "/home/9.png",
  ];

  return (
    <section className="px-6 py-12 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          title="Join Nu.メタ創"
          description={`メタ創の活動は、基本的に Discord 上で行われています。
また昨年度は、IVRC2025 や Vket など、
メタバース上のイベントや現地展示イベントにも参加しました。`}
        />

        <ImageGrid images={images} altPrefix="メタ創の活動風景" />

        <p className="text-lg leading-relaxed mb-8">
          メタ創では、日本大学の学生限定となりますが、
          デザイナーやエンジニアを募集しています。
          <br />
          興味のある方は、公式 X の DM までご連絡ください。
        </p>

        <ButtonLink href="https://x.com/nuMetasou">公式Xはこちら</ButtonLink>
      </div>
    </section>
  );
};

export default New;
