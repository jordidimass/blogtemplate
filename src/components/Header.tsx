import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" passHref className="text-2xl font-bold">
          My Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref className="text-gray-700 hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" passHref className="text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};