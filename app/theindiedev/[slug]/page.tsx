// /app/theindiedev/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';

export async function generateStaticParams() {
  // Read all markdown files in the posts/theindiedev directory
  const files = fs.readdirSync(path.join(process.cwd(), 'app/posts/theindiedev'));

  // Create params for each post based on the filename (slug)
  return files.map(filename => ({
    slug: filename.replace('.mdx', ''), // Ensure this matches your file extension
  }));
}

const components = {
  h2: (props) => <h2 className='text-display-large' style={{ color: 'red' }} {...props} />,
  p: (props) => <p style={{ color: 'blue' }} {...props} />,
};

export default async function PostPage({ params }) {
  // Read the specific markdown file based on the slug
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'app/posts/theindiedev', `${params.slug}.mdx`), 'utf-8');
  
  console.log('mark: ', markdownWithMeta)
  // Use gray-matter to parse the frontmatter and content
  const { data: frontmatter, content } = matter(markdownWithMeta);

  // Serialize the content
  const mdxSource = await serialize(markdownWithMeta, { parseFrontmatter: true })

  console.log('ser: ', mdxSource)

  return (
    <div
      className='flex flex-col gap-[0.6rem]'
    >
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>

      <MDXRemote source={content} components={components} /> {/* Use the serialized content here */}
    </div>
  );
}