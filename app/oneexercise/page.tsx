import OneExerciseLogo from "@/components/custom_ui/oneexercise-logo"
import AppShowCase from "@/components/app-showcase"
import { cn } from "@/lib/utils"
import externalLinks from "@/lib/external-links"
import { gloria } from "../layout";

export default function OneExercise() {
  return (
      <main>
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
          border={false}
          small = { true }
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
        
        <section
         className="bg-zinc-50" 
        >
          <h2
          className={
            cn(
              "text-mstf-h2 text-center",
              gloria.className
              )
          }
          >Features</h2>
        </section>

        <section
         className="bg-zinc-50" 
        >
          <h2
          className={
            cn(
              "text-mstf-h2 text-center",
              gloria.className
              )
          }
          >How To Use OneExercise</h2>
          
        </section>
      </main>
  )
}