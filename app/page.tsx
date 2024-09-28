import AppShowCase from "@/components/app-showcase";
import OneExerciseLogo from "@/components/custom_ui/oneexercise-logo";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import externalLinks from "@/lib/external-links";
import { gloria } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className="space-y-12"
    >
      <Hero />
      
      <AppShowCase 
        src={externalLinks.OneExercise}
        title="Try 1Xercise (OneExercise)"
        name="OneExercise"
        aria-label="This iframe showcases my workout tracker app (1Xercsie)"
        className="!mb-[9.3rem] xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-[0rem]"
        labelTop="Try it here!"
        left={
          <div
            className="flex flex-col place-items-center gap-[0.6rem] xl:-mr-40"
          >
            <OneExerciseLogo />
            <p
              className={
                cn(
                  gloria.className,
                  "text-m3-sys-light-primary"
                )
              }
            >The single-exercise workout tracker</p>
          </div>
        }
        right={
          <div
            className={
              cn(
                gloria.className,
                "flex flex-col gap-3 text-body-medium ml-8"
              )
            }
          >
            <p
              className="text-m3-sys-light-primary text-[18px]"
            >Start slow & build up</p>
            <p>Master one exercise at a time</p>
            <p>Color coded feedback</p>
          </div>
        }
      >
        
      </AppShowCase>
      
    </main>
  );
}
