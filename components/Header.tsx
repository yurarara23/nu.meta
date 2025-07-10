'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar'; 

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 bg-black shadow-md text-white">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white"
          >
            <FaBars size={20} />
          </button>

          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="font-bold text-lg">Nu.メタ創</span>
          </Link>
        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
