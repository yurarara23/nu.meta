import Link from "next/link";
import { FaGithub } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-6 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* 左：コピーライト */}
        <p className="text-sm">2025 NU.MetaCreate</p>

        {/* 右：リンク＋GitHubアイコン */}
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:underline text-sm">
            プライバシー
          </Link>
          <Link href="/terms" className="hover:underline text-sm">
            利用規約
          </Link>
          <a
            href="https://github.com/yurarara23/nu.meta" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
