
import ArticleFilter from "@/components/article-filter"
import { dm_serif_display, dosis, gloria } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import Link from 'next/link';
import type { Metadata } from "next";
import Image from "next/image";
import { formatDate } from "@/lib/stringUtils";
import { getSortedPosts } from "@/lib/getPosts";

export const metadata = {
  title: "The indieDev - Indie Development and Design Insights",
  description: 'Explore valuable insights and lessons learned in indie app development and design from Mostafa Lotfy.',
  keywords: ['indie development', 'app design', 'dev insights', 'Mostafa Lotfy', 'blog', 'ui', 'ux'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'mstflotfy',
    title: 'The indieDev - Insights on Indie Development and Design',
    description: 'Discover insights and lessons from Mostafa Lotfy on indie app development and design.',
    url: 'https://mstflotfy.com/theindiedev',
    images: [
      {
        url: 'https://mstflotfy.com/images/The-indieDev-Card.png',
        width: 1200,
        height: 630,
        alt: "The indieDev Insights",
      },
    ],
  },
  alternates: {
    canonical: 'https://mstflotfy.com/theindiedev',
  }
};

export default function TheIndieDev() {
  
  const theIndieDevPosts = getSortedPosts('app/posts/theindiedev')
  
  return (
    <main>
      <header
        className="-mt-[7rem] pt-[10.6rem] md:pt-[14rem] p-[0.1rem] pb-[4.6rem] md:pb-[17.8rem] flex flex-col justify-center text-center items-center bg-[#002022] text-[#DAE4E5]" 
      >
        <p
          className={
            cn(
              gloria.className,
              "text-sm md:text-body-medium"
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
        {
        // <ArticleFilter />  
        }
        <div>
              {theIndieDevPosts.map(post => (
                <Link 
                  key={post.slug} 
                  href={`${post.frontmatter.permalink}`}
                  className={
                    cn(
                      "my-[3.2rem] hover:bg-m3-sys-light-primary-container flex items-center space-x-[0.8rem] md:space-x-[3.2rem] mx-[0.4rem] lg:mx-[1.2rem] py-[1.2rem] px-[0.4rem] lg:px-[12rem] rounded-[1.2rem] h-[9.6rem] transition duration-200",
                      dosis.className
                    )
                  }
                    >
                  <Image 
                    className="rounded-[0.8rem]"
                    src={post.frontmatter.image}
                    alt={`${post.frontmatter.title} article image`}
                    width="102"
                    height="60"
                  />
                  <div
                    aria-label="article info" 
                    className="flex flex-col-reverse md:flex-row gap-2 md:gap-12 md:items-center" 
                  >
                    <small
                      className="text-[1.2rem] lg:text-[1.4rem] xl:text-[1.8rem] text-nowrap"
                    >
                      {formatDate(post.frontmatter.date)}
                    </small>
                    <h2
                      className="text-[1.4rem] xxs:text-[1.8rem] xxs:leading-[2.2rem] xl:text-[3.6rem] xl:leading-[4.2rem]"
                    >{post.frontmatter.title.toUpperCase()}</h2>
                  </div>
                </Link>
              ))}
            </div>
      </div>
        
    </main>
  )
}