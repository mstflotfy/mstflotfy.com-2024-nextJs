// /app/theindiedev/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  // Read all markdown files in the posts/theindiedev directory
  const files = fs.readdirSync(path.join(process.cwd(), 'app/posts/theindiedev'));

  // Create params for each post based on the filename (slug)
  return files.map(filename => ({
    slug: filename.replace('.mdx', ''), // Ensure this matches your file extension
  }));
}

const components = {
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => <h2 className='text-display-large' style={{ color: 'red' }} {...props} />,
  p: (props: React.HTMLProps<HTMLParagraphElement>) => <p style={{ color: 'blue' }} {...props} />,
};

// Define the type for the component props
interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: PostPageProps ) {
  // Read the specific markdown file based on the slug
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'app/posts/theindiedev', `${params.slug}.mdx`), 'utf-8');
  
  console.log('mark: ', markdownWithMeta)
  // Use gray-matter to parse the frontmatter and content
  const { data: frontmatter, content } = matter(markdownWithMeta);

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
