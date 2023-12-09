import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="bg-red-600 text-white h-12 w-full flex items-center justify-center">
      <div className="container mx-auto  flex  justify-between">
        <div className="logo text-2xl font-serif font-bold italic cursor-pointer">
          <Link href="/">Custom Hook</Link>
        </div>
        <ul className="flex gap-4 font-semibold items-center text-sm font-serif ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
