// /app/theindiedev/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc'


export async function generateStaticParams() {
  // Read all markdown files in the posts/theindiedev directory
  const files = fs.readdirSync(path.join(process.cwd(), 'app/posts/theindiedev'));

  // Create params for each post based on the filename (slug)
  return files.map(filename => ({
    slug: filename.replace('.md', ''), // Remove .md to get the slug
  }));
}

export default async function PostPage({ params }) {
  // Read the specific markdown file based on the slug
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'app/posts/theindiedev', `${params.slug}.md`), 'utf-8');
  
  // Use gray-matter to parse the frontmatter and content
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>

      <MDXRemote 
        source={content}
      />

    </div>
  );
}