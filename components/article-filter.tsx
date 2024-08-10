import { gloria } from "@/lib/fonts"
import { cn } from "@/lib/utils"

interface ArticleFilterProps {
  
}
const ArticleFilter: React.FC<ArticleFilterProps> = () => {
  return (
    <div
      className={
        cn(
          "flex items-center justify-center md:space-x-[3.1rem] md:-ml-[120.3px]",
          gloria.className
        )
      }
    >
      <small
        className="hidden md:block"
      >
        Filter by tags
      </small>
      <div 
        aria-label="tags"
        className="flex flex-col items-center space-y-[1.8rem] "
      >
        <ul
          className="flex"
        >
          <li>Dev</li>
          <li>Design</li>
        </ul>
        <small>Showing tagname1 & tagname2 only</small>
      </div>
    </div>
  )
}
export default ArticleFilter