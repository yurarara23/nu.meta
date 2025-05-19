// app/blog/page.tsx
import Image from "next/image";

const members = [
  {
    name: "ジン",
    year: "2B",
    department: "情報科",
    image: "/icons/jin.png",
    slug: "ジン",
  },
  {
    name: "yurarara",
    year: "2B",
    department: "情報科",
    image: "/icons/yurarara.png",
    slug: "yurarara",
  },
  {
    name: "紗痲",
    year: "2B",
    department: "情報科",
    image: "/icons/tokudome.png",
    slug: "紗痲",
  },
  {
    name: "ルイ",
    year: "2B",
    department: "電子工科",
    image: "/icons/rui.png",
    slug: "ルイ",
  },
  {
    name: "水瓢瓜",
    year: "2B",
    department: "交通科",
    image: "/icons/takahisa.png",
    slug: "水瓢瓜",
  },
  {
    name: "shiburin",
    year: "2B",
    department: "情報科",
    image: "/icons/shiburin.png",
    slug: "shiburin",
  },
  {
    name: "masashi",
    year: "4B",
    department: "芸術科",
    image: "/icons/masashi.png",
    slug: "masashi",
  },
  {
    name: "ぽてぃちゃん",
    year: "2B",
    department: "芸術科",
    image: "/icons/poteychan.png",
    slug: "ぽてぃちゃん",
  },
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
              <Image
                src={member.image}
                alt={member.name}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold text-[#60a5fa]">{member.name}</h2>
                <p className="text-sm text-gray-300">
                  {member.year}・{member.department}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
