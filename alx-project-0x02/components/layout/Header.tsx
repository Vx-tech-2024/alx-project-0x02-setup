import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white py-4 shadow-md">
      <nav className="max-w-5xl mx-auto flex justify-center gap-8 text-lg font-medium">
        <Link href="/home" className="hover:text-gray-200 transition">
          Home
        </Link>

        <Link href="/about" className="hover:text-gray-200 transition">
          About
        </Link>

        <Link href="/posts" className="hover:text-gray-200 transition">
          Posts
        </Link>
      </nav>
    </header>
  );
}
