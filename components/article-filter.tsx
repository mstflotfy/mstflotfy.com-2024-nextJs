import { gloria } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button"
import Tag from "./custom_ui/tag"

interface ArticleFilterProps {
  
}
const ArticleFilter: React.FC<ArticleFilterProps> = () => {
  return (
    <div
      className={
        cn(
          "flex justify-center md:space-x-[3.1rem] md:-ml-[140.3px]",
          gloria.className
        )
      }
    >
      <small
        className="hidden md:block mt-3"
      >
        Filter by tags
      </small>
      <div 
        aria-label="tags"
        className="flex flex-col items-center space-y-[1.8rem]"
      >
        <div
          className="flex space-x-[0.8rem] font-roboto-mono items-center"
        >
          <Tag 
            text="Dev"
          />
          <Tag 
            text="Design"
          />
          <Tag 
            text="Git"
            size="small"
          />
          <Tag 
            text="Figma"
            size="small"
          />
        </div>
        <small>Showing tagname1 & tagname2 only</small>
      </div>
    </div>
  )
}
export default ArticleFilter