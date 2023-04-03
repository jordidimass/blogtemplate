import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <a className="text-2xl font-bold">My Portfolio</a>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref>
                <a className="text-gray-700 hover:text-blue-500">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <a className="text-gray-700 hover:text-blue-500">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a className="text-gray-700 hover:text-blue-500">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};