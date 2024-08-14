import ArticleFilter from "@/components/article-filter"
import { dm_serif_display, gloria } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The indieDev",
  description: "Sharing some of the lessons I learn while building my own indie apps",
};

export default function TheIndieDev() {
  
  // Use path.resolve to ensure the correct path
    const files = fs.readdirSync(path.resolve('app/posts/theindiedev'));
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('app/posts/theindiedev', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return { frontmatter, slug: filename.replace('.mdx', '') };
  });
  
  return (
    <main>
      <header
        className="-mt-[7rem] pt-[10.6rem] md:pt-[14rem] p-[0.1rem] pb-[4.6rem] md:pb-[17.8rem] flex flex-col justify-center text-center items-center bg-[#002022] text-[#DAE4E5]" 
      >
        <p
          className={
            cn(
              gloria.className,
              "text-xs md:text-body-medium"
            )
          }
        >
          Sharing some of the lessons I learn while building my own indie apps
        </p>
        <h1
          className={
            cn(
              dm_serif_display.className,
              "text-[14vw]"
            )
          }
        >
          The indieDev
        </h1>
      </header>
        
      <div 
        aria-label="the indieDev articles"
        className="pt-[4.2rem] space-y-[4.6rem] pb-[4.6rem] md:pt-[6.4rem] md:pb-[21.8rem]" 
      >
        <ArticleFilter />  
        {
          // article list
        }
        <div>
              <h1>Indie Dev Blog</h1>
              {posts.map(post => (
                <div key={post.slug}>
                  <h2>{post.frontmatter.title}</h2>
                  <Link href={`/theindiedev/${post.slug}`}>Read more</Link>
                </div>
              ))}
            </div>
      </div>
        
    </main>
  )
}