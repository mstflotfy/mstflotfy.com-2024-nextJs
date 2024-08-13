import ArticleFilter from "@/components/article-filter"
import { dm_serif_display, gloria } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function TheIndieDev() {
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
      </div>
        
    </main>
  )
}