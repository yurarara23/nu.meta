import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black shadow-md text-white">
      {/* 左：ロゴ＋タイトルをクリックでトップに戻る */}
      <Link href="/" className="flex items-center gap-2 hover:opacity-80">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="font-bold text-lg">Nu.メタ創</span>
      </Link>
      <Link href="/blog" className="hover:underline text-sm">
        Blog一覧
      </Link>
    </header>
  );
};

export default Header;
