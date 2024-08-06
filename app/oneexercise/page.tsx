import OneExerciseLogo from "@/components/custom_ui/oneexercise-logo"
import AppShowCase from "@/components/app-showcase"
import { cn } from "@/lib/utils"
import externalLinks from "@/lib/external-links"
import { gloria } from "@/lib/fonts";
import FeatureShowcase from "@/components/feature-showcase";

export default function OneExercise() {
  return (
      <main>
        
        <div
          className="bg-m3-custom-light-green -mt-[7rem] pt-[10rem] pb-[6.8rem]" 
        >
        <header 
          aria-label="Page header"
          className="flex items-center p-16 mt-[1.6rem]"
        >
          <OneExerciseLogo  full />
        </header>
        
          <AppShowCase 
            src={externalLinks.OneExercise}
            title="Try 1Xercise (OneExercise)"
            name="OneExercise"
            aria-label="This iframe showcases my workout tracker app (1Xercsie)"
            small
            border = {false}
            labelTop="Try it here!"
            left={
              <div
                className="flex flex-col place-items-end gap-[0.6rem]"
              >
                <p
                  className={
                    cn(
                      gloria.className,
                      "text-m3-sys-light-primary"
                    )
                  }
                >The single-exercise workout tracker</p>
                <p
                  className={
                    cn(
                      gloria.className,
                      "text-m3-sys-light-primary"
                    )
                  }
                >A practical application of the ‘Start slow and build up’ mindset</p>
              </div>
            }
          >
          </AppShowCase>
          
          </div>
        
        <section
         className="bg-m3-custom-light-yellow pt-[10rem] pb-[21.8rem]" 
        >
          <h2
          className={
            cn(
              "text-headline-large md:text-mstf-h2 text-center mb-[7.8rem]",
              gloria.className
              )
          }
          >Features</h2>
          
          <FeatureShowcase />
        </section>

        <section
         className="bg-m3-custom-light-red pt-[10rem] pb-[21.8rem]" 
        >
          <h2
          className={
            cn(
              "text-headline-large md:text-mstf-h2 text-center max-w-[650px] leading-mstf-headline-large tracking-mstf-headline-large mx-auto",
              gloria.className
              )
          }
          >How To Use OneExercise</h2>
        </section>
      </main>
  )
}