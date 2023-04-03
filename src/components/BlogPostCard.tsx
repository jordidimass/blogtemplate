import React from 'react';
import Link from 'next/link';

type BlogPostCardProps = {
  post: {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
  };
};

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const { title, date, slug, excerpt } = post;

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-4">{new Date(date).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        passHref
        className="text-blue-500 hover:text-blue-600">
        Read More
      </Link>
    </div>
  );
};