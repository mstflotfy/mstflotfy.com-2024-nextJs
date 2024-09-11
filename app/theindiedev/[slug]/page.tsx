// /app/theindiedev/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { dosis } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import CustomLink from '@/components/custom_ui/custom-external-link-icon';
import Image from "next/image"
import { formatDate } from '@/lib/stringUtils';
import Tag from '@/components/custom_ui/tag';
import YoutubeEmbed from '@/components/youtubeEmbed';

export async function generateStaticParams() {
  // Read all markdown files in the posts/theindiedev directory
  const files = fs.readdirSync(path.join(process.cwd(), 'app/posts/theindiedev'));

  // Create params for each post based on the filename (slug)
  return files.map(filename => ({
    slug: filename.replace('.mdx', ''), // Ensure this matches your file extension
  }));
}

const components = {
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => <h2 className='text-headline-medium' style={{ }} {...props} />,
  p: (props: React.HTMLProps<HTMLParagraphElement>) => <p className='mb-[3.2rem]' style={{ }} {...props} />,
  img: (props: React.HTMLProps<HTMLImageElement>) => {
    const { src, alt, width = 900, height = 600 } = props
    if (!src || !alt) {
      console.warn('Image missing src or alt')
      return null
    }
    return <Image src={src} alt={alt} width={Number(width)} height={Number(height)} className='rounded-[2.4rem]' />
  },
  CustomLink
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
    <>
      <header
        className={
          cn(
            "-mt-[7rem] pt-[10.6rem] md:pt-[14rem] md:p-[12rem] pb-[4.6rem] md:pb-[17.8rem] flex flex-col justify-center text-center items-center bg-[#002022] text-[#DAE4E5] space-y-[3.2rem]" ,
            dosis.className
          )
        }
      >
        <h1
          className='text-[2.4rem] leading-[2.6rem] md:text-[4.6rem] md:leading-[4.9rem] lg:text-[7.6rem] lg:leading-[7.9rem] text-center max-w-[90rem]'
        >
          {frontmatter.title.toUpperCase()}
        </h1>
        {
          frontmatter.image &&
          <Image
            className='rounded-[2.6rem] md:rounded-[4.6rem] px-[0.8rem]'
            src={frontmatter.image}
            alt={frontmatter.title}
            width={900}
            height={600}
          />
        }
        <p
          className='text-center md:text-[2.3rem]'
        >
          {formatDate(frontmatter.date)} . {frontmatter.author}
        </p>
        <div
          className='flex flex-wrap place-items-center items-center justify-center gap-4'
        >
          {
            frontmatter.tags.map((tag: string) => (
              <Tag key={tag} text={tag} clickable={false} />
            ))
          }
        </div>
      </header>
      {frontmatter.video && <YoutubeEmbed videoId={frontmatter.video} />}
      <article
        className='flex flex-col gap-[0.6rem] p-4 rounded-lg mt-[6.4rem] mb-[17.8rem] md:w-1/2 mx-auto'
      >
        <MDXRemote source={content} components={components} /> {/* Use the serialized content here */}
      </article>
    </>
  );
}
