import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">ALX Project 02</h1>

        <nav className="space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <Link href="/about" className="hover:underline">
            About
          </Link>

          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
