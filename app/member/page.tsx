import Image from "next/image";
import Link from "next/link"; // aタグよりLinkコンポーネントが推奨です

const members = [
  { name: "iwa", year: "B2", image: "/icons/iwa.png", slug: "iwa" },
  {
    name: "yurarara",
    year: "B2",
    image: "/icons/yurarara.png",
    slug: "yurarara",
  },
  {
    name: "水瓢瓜",
    year: "B2",
    image: "/icons/mizmelon.png",
    slug: "mizmelon",
  },
  {
    name: "ぽてぃちゃん",
    year: "B2",
    image: "/icons/potty.png",
    slug: "pothi",
  },
  { name: "紗痲", year: "B2", image: "/icons/syama.png", slug: "紗痲" },
  { name: "ルイ", year: "B2", image: "/icons/nero.png", slug: "ルイ" },
  { name: "ALMA", year: "B3", image: "/icons/alma.jpg", slug: "alma" },
  { name: "yoshi", year: "B2", image: "/icons/yoshi.png", slug: "yoshi" },
  { name: "ff", year: "B2", image: "/icons/ff.png", slug: "ff" },
];

export default function MemberListPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-20">
      {/* タイトルセクション */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-black mb-4 text-white tracking-tighter italic uppercase">
          Members
        </h1>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full shadow-[0_0_10px_#06b6d4]" />
      </section>

      {/* メンバーグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {members.map((member) => (
          <Link
            href={`/blog/${encodeURIComponent(member.slug)}`}
            key={member.slug}
            className="group relative bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/5 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:-translate-y-1"
          >
            {/* ホバー時の背景グラデーション装飾 */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="relative flex flex-col items-center text-center">
              {/* アイコン部分 */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="relative rounded-full object-cover border-2 border-white/10 group-hover:border-cyan-500 transition-colors duration-300"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border-2 border-white/10">
                    <span className="text-gray-500 text-xs">NO IMAGE</span>
                  </div>
                )}
              </div>

              {/* テキスト部分 */}
              <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {member.name}
              </h2>
              <p className="text-xl mt-1 font-mono tracking-widest">
                {member.year}
              </p>

              {/* ホバー時に現れる小さな「VIEW BLOG」表示 */}
              <span className="mt-4 text-[10px] text-cyan-500 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                VIEW BLOG →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
