import { cn } from "@/lib/utils"
import { freehand, gloria } from "@/lib/fonts"

const Hero = () => {
 return (
   <header aria-label="Page header" className="space-y-32 pt-[3.2rem]">
    <h1 
      className={
        cn(
          freehand.className,
          "text-mstf-headline-large leading-mstf-headline-large tracking-mstflotfy-headline-large", 
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
          "leading-display-small text-center space-y-3"
        )
      }
    >
      <h2
        className="text-title-large tracking-title-large leading-title-large md:text-display-small md:leading-display-small md:tracking-display-small"
      >
        Hi, I&apos;m Mostafa Lotfy
      </h2>
      <h2
        className="text-m3-sys-light-primary text-title-small tracking-title-small leading-title-small md:text-title-medium md:tracking-title-medium md:leading-title-medium"
      >
        I explore & build tools for Productivity & SelfMastery
      </h2>
    </div>
   </header>
 ) 
}

export default Hero