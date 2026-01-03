import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  title: string;
  image: string;
  slug: string;
  author: string;
  date: string;
};

const PostCard = ({ title, image, slug, author }: PostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="
  group block w-full
  bg-gradient-to-br from-gray-800 to-gray-900
  rounded-md
  border border-gray-700/80
  shadow-[0_2px_8px_rgba(0,0,0,0.6)]
  hover:shadow-[0_8px_30px_rgba(168,85,247,0.35)]
  transition-all duration-300
"
    >
      {/* 画像部分 */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* テキスト部分（line-clamp-1で行数制限) */}
      <div className="p-5 text-white">
        <h3
          className="text-xl font-bold mb-1 group-hover:text-purple-400 transition
               line-clamp-1"
        >
          {title}
        </h3>
        <p className="text-sm text-gray-400">by {author}</p>
      </div>
    </Link>
  );
};

export default PostCard;
