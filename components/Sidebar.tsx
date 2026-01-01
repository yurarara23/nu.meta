"use client";
import Link from "next/link";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 backdrop-blur-sm text-white
        transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 text-lg font-bold">Sidebar</div>
        <nav className="flex flex-col gap-2 p-4">
          <Link
            href="/"
            className="hover:bg-blue-700 p-2 rounded"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:bg-blue-700 p-2 rounded"
            onClick={onClose}
          >
            Blog
          </Link>
          <Link
            href="/member"
            className="hover:bg-blue-700 p-2 rounded"
            onClick={onClose}
          >
            member
          </Link>
        </nav>
      </aside>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>
      )}
    </>
  );
}
