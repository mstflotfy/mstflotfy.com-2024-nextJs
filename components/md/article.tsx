import { cn } from "@/lib/utils"
import React from "react"

interface ArticleProps {
  children: React.ReactNode
  className?: string
}

const Article: React.FC<ArticleProps> = ({
  children,
  className
}) => {
  return (
    <article
      className= {
        cn(
          'flex flex-col !gap-[1.6em] p-4 mt-[6.4rem] mb-[17.8rem] md:w-1/2 mx-auto',
          className
        )
      }
    >
      {children}
    </article>
  )
}
export default Article