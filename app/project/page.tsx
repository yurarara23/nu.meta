import Image from "next/image";

export default function ProjectPage() {
  const projects = [
    {
      title: "DimensionsGate",
      description: "メタバース空間で4次元体験を可能にする作品。",
      image: "/mizmelon/DG/dimmgate_top.webp",
      link: "https://vrchat.com/home/world/wrld_d84a41e8-fd6a-4167-bc90-637af6fc3c41/info",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-6xl font-extrabold mb-4 text-white tracking-tighter italic">
          CONTENTS
        </h1>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-gray-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed h-12 line-clamp-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/btn relative inline-flex items-center justify-center 
                  w-full px-6 py-3 
                  overflow-hidden font-bold text-sm tracking-widest text-white 
                  bg-transparent border border-cyan-500/50 
                  rounded-xl transition-all duration-300
                  hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]
                  active:scale-95
                "
              >
                <span className="absolute inset-0 w-full h-full bg-cyan-500 transition-all duration-300 scale-x-0 group-hover/btn:scale-x-100 origin-left"></span>
                <span className="relative transition-colors duration-300 group-hover/btn:text-black flex items-center gap-2">
                  VIEW PROJECT
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
