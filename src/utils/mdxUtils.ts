import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

const contentDirectory = path.join(process.cwd(), 'src/content');
console.log('Content directory:', contentDirectory); // Add this line

export function getAllPosts() {
  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as {
        title: string;
        date: string;
        excerpt: string;
      }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { code, frontmatter } = await bundleMDX(fileContents, {
    cwd: contentDirectory,
  });

  return {
    code,
    slug,
    ...(frontmatter as {
      title: string;
      date: string;
      excerpt: string;
    }),
  };
}
