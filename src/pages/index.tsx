import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPosts } from '../utils/mdxUtils';
import { BlogPostCard } from '../components/BlogPostCard';
import { AboutMeSection } from '../components/AboutMeSection';
import { Header } from '../components/Header';

type IndexProps = {
  posts: {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
  }[];
};

const Index: React.FC<IndexProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>My Portfolio/Blog</title>
        <meta name="description" content="Welcome to my portfolio and blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <AboutMeSection />
        <h1>Latest Blog Posts</h1>
        <div>
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

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

export default Index;
