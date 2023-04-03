// src/pages/blog/[slug].tsx
import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPosts, getPostBySlug } from '../../utils/mdxUtils';
import { Header } from '../../components/Header';

const PostPage = ({ post }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-8">{new Date(post.date).toLocaleDateString()}</p>
        <div>
          <MDXRemote {...post.mdxSource} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug as string;
  const post = await getPostBySlug(slug);

  console.log('getStaticProps post:', post); // Add this line

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  console.log('getStaticPaths paths:', paths); // Add this line

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
