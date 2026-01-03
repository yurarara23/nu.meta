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
        <h2 className="text-3xl font-bold mb-6">Join Nu.メタ創</h2>

        <p className="text-lg leading-relaxed mb-6">
          メタ創の活動は、基本的に Discord 上で行われています。
          <br />
          また昨年度は、 IVRC2025 や Vket など、
          メタバース上のイベントや現地展示イベントにも参加しました。
        </p>

        {/* 画像エリア */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`メタ創の活動風景 ${index + 1}`}
              className="rounded-xl object-cover aspect-[4/3] w-full"
              loading="lazy"
            />
          ))}
        </div>

        <p className="text-lg leading-relaxed mb-8">
          メタ創では、日本大学の学生限定となりますが、
          デザイナーやエンジニアを募集しています。
          <br />
          興味のある方は、公式 X の DM までご連絡ください。
        </p>

        <a
          href="https://x.com/nuMetasou"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full transition"
        >
          公式Xはこちら
        </a>
      </div>
    </section>
  );
};

export default New;
