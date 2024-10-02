import { cn } from "@/lib/utils"
import { dosis } from '@/lib/fonts';

interface PageHeaderProps {
 title: string 
 subtitle?: string
 className?: string
}
const PageHeader: React.FC<PageHeaderProps> =  ({
  title = 'Title',
  subtitle = 'Subtitle',
  className
}) => {
  return (
    <header
        className={
          cn(
            "-mt-[7rem] pt-[10.6rem] md:pt-[16.3rem] pb-[4.6rem] md:pb-[6.8rem]", 
            dosis.className,
            className
          )
        }
    >
      <h1
        className="flex flex-col items-center text-[7.6rem] leading-[6.2rem]"
      >
        {title.toUpperCase()}
        <span
          className="text-title-large"
        >
          {subtitle}
        </span>
      </h1>
    </header>
  )
}
export default PageHeader