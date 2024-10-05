import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link';
import { cn } from "@/lib/utils"
import { dosis } from '@/lib/fonts';
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components
    
    h1: ({ children }) => (
      <h1 
        className={
          cn(
            'text-[2.4rem] leading-[2.6rem] md:text-[4.6rem] md:leading-[4.9rem] lg:text-[7.6rem] lg:leading-[7.9rem] text-center',
            dosis.className
          )
        }
          >{children}</h1>
    ),
    
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => <h2 className='text-headline-medium leading-headline-medium' style={{ }} {...props} />,
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => <h3 className='text-headline-small leading-headline-small' style={{ }} {...props} />,
    
    p: (props: React.HTMLProps<HTMLParagraphElement>) => <p className='mb-[3.6rem] leading-body-large' style={{ }} {...props} />,
    
    img: (props: React.HTMLProps<HTMLImageElement>) => {
      const { src, alt, width = 900, height = 600 } = props
      if (!src || !alt) {
        console.warn('Image missing src or alt')
        return null
      }
      return <Image src={src} alt={alt} width={Number(width)} height={Number(height)} className='rounded-[2.4rem] ml-auto mr-auto' />
    },
    
    pre: (props: React.HTMLProps<HTMLPreElement>) => <pre className='py-[2rem] my-[1.2rem] rounded-2xl overflow-x-auto text-body-medium ' {...props} />,
    
    a: (props: React.HTMLProps<HTMLAnchorElement>) => {
      const { href } = props
      return <Link href={href as string} className='text-m3-sys-light-link underline hover:no-underline transition-all duration-200 hover:text-m3-sys-light-on-surface delay-75' {...props} />
    }, 

    // Using style as tailwind for `ul` is, for some reason, always overridden
    ul: ({ children }) => (
      <ul 
        className='list-disc list-inside pl-8 text-gray-700'
        style={{ listStyle: 'disc', paddingLeft: `${3.2}rem` }} 
        >{children}</ul>
    ),

  }
}