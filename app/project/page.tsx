import Image from "next/image";

export default function ProjectPage() {
  const projects = [
    {
      title: "DimensionsGate",
      description:
        "メタバース空間で4次元体験を可能にする作品。IVRCメタバース部門にて入賞。",
      image: "/mizmelon/DG/dimmgate_top.webp",
      link: "https://vrchat.com/home/world/wrld_d84a41e8-fd6a-4167-bc90-637af6fc3c41/info",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-100 py-16 px-6">
      {/* タイトルセクション */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-cyan-400 tracking-wide drop-shadow-lg">
          Project
        </h1>
      </section>

      {/* プロジェクト一覧 */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 border border-gray-700 hover:border-cyan-400 transition duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-cyan-300">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 text-black text-sm font-semibold px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition"
              >
                詳しく見る
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

