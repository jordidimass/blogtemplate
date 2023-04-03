import React from 'react';
import { GetStaticProps } from 'next';
import { BlogPostCard } from '../components/BlogPostCard';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { getAllPosts } from '../utils/mdxUtils';

type BlogProps = {
  posts: {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
  }[];
};

export default function Blog({ posts }: BlogProps) {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = getAllPosts();
  
    // Convert date objects to strings
    const serializedPosts = allPosts.map((post) => ({
      ...post,
      date: post.date.toISOString(),
    }));
  
    return {
      props: {
        posts: serializedPosts,
      },
    };
  };
  
