import { cn } from "@/lib/utils"
import { freehand, gloria } from "@/app/layout"

const Hero = () => {
 return (
   <header aria-label="Page header">
    <h1 
      className={
        cn(
          freehand.className,
          "text-mstf-headline-large leading-mstf-healine-large tracking-mstflotfy-headline-large", 
          "text-center mt-0 mb-[2rem]",
        )
      }
    >
      mstflotfy
    </h1>
    <div
      className={
        cn(
          gloria.className,
          "leading-display-small text-center"
        )
      }
    >
      <h2
        className="text-display-small tracking-display-large"
      >
        Hi, I&apos;m Mostafa Lotfy
      </h2>
      <h2
        className={
          cn(
            "text-title-medium tracking-body-large",
            "text-m3-sys-light-primary"
          )
        }
      >
        I explore & build tools for Productivity and SelfMastery
      </h2>
    </div>
   </header>
 ) 
}

export default Hero