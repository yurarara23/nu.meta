import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  title: string;
  image: string;
  category: string;
  slug: string;
  author: string;
  date: string;
};

const PostCard = ({ title, image, category, slug, author }: PostCardProps) => {
  return (
    <Link
      href={`/${category}/${slug}`}
      className="block w-full bg-gray-800 shadow-md rounded overflow-hidden transition 
             hover:shadow-lg border border-transparent hover:border-blue-400"
    >
      <div className="relative w-full h-40">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <span
          className={`text-sm ${
            category === "info" ? "text-green-500" : "text-blue-600"
          }`}
        >
          {category}
        </span>
        <h3 className="mt-1 font-semibold text-lg text-white">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">by {author}</p>
      </div>
    </Link>
  );
};
export default PostCard;
