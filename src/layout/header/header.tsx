import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-4 right-[20%] w-[60vw] mx-auto bg-white bg-opacity-30 backdrop-blur-lg shadow-md p-5 rounded-[2vw] transform scale-x-[-1]">
      <div className="container mx-auto flex justify-between items-center transform scale-x-[-1]">
        <h1 className="text-2xl font-bold text-gray-800">Aziz Dev</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li><Link href="/" className="hover:text-gray-900 active:text-gray-600 transition duration-200 ease-in-out">Home</Link></li>
            <li><Link href="/projects" className="hover:text-gray-900 active:text-gray-600 transition duration-200 ease-in-out">Projects</Link></li>
            <li><Link href="/about" className="hover:text-gray-900 active:text-gray-600 transition duration-200 ease-in-out">About</Link></li>
            <li><Link href="/blogs" className="hover:text-gray-900 active:text-gray-600 transition duration-200 ease-in-out">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900 active:text-gray-600 transition duration-200 ease-in-out">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
