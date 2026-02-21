import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  title: string;
  image: string;
  slug: string;
  author: string;
  date: string;
};

const PostCard = ({ title, image, slug, author, date }: PostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="
        group relative block w-full
        bg-gray-900/40 backdrop-blur-sm
        overflow-hidden
        border border-white/10
        transition-all duration-500
        hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
        hover:-translate-y-1
      "
    >
      {/* 画像部分：オーバーレイを重ねて質感をアップ */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />

        {/* 日付バッジ */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
          <p className="text-[15px] text-cyan-400 font-mono tracking-tighter">
            {date}
          </p>
        </div>
      </div>

      {/* テキスト部分 */}
      <div className="p-6">
        {/* カテゴリー的な装飾（オプション） */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-cyan-500"></span>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/80 font-bold">
            Blog
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1 leading-snug">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <p className="text-xs text-gray-500 font-medium">
            by{" "}
            <span className="text-gray-300 group-hover:text-white transition-colors">
              {author}
            </span>
          </p>

          {/* 矢印アイコンの演出 */}
          <div className="text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ホバー時にカード底面を光らせる装飾 */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Link>
  );
};

export default PostCard;
