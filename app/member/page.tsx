// app/blog/page.tsx
import Image from "next/image";

const members = [
  {
    name: "iwa",
    year: "B2",
    image: "/icons/iwa.png",
    role: "代表",
    slug: "iwa",
  },
  {
    name: "yurarara",
    year: "B2",
    image: "/icons/yurarara.png",
    role: "プログラマー",
    slug: "yurarara",
  },
  {
    name: "水瓢瓜",
    year: "B2",
    image: "/icons/mizmelon.png",
    role: "映像クリエイター",
    slug: "mizmelon",
  },
  {
    name: "ぽてぃちゃん",
    year: "B2",
    image: "/icons/pothi.png",
    role: "シナリオライター",
    slug: "pothi",
  },
  {
    name: "紗痲",
    year: "B2",
    image: "/syama/0.png",
    role: "アシスタントディレクター",
    slug: "紗痲",
  },
  {
    name: "ルイ",
    year: "B2",
    image: "/icons/rui.png",
    role: "3Dモデリング",
    slug: "ルイ",
  },
  {
    name: "ALMA",
    year: "B3",
    image: "/icons/alma.jpg",
    role: "サウンドクリエイター",
    slug: "alma",
  }
];


export default function MemberListPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">メンバー一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <a
            href={`/blog/${encodeURIComponent(member.slug)}`}
            key={member.slug}
            className="bg-gray-900 rounded-2xl p-4 shadow-md hover:shadow-lg transition duration-200 hover:bg-gray-800"
          >
            <div className="flex items-center space-x-4">
              {member.image ? (
              <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                    />
                ) : null}

              <div>
                <h2 className="text-xl font-semibold text-[#60a5fa]">{member.name}</h2>
                <p className="text-sm text-gray-300">
                  {member.year}
                </p>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
