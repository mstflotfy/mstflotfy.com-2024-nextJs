import AppShowCase from "@/components/app-showcase";
import OneExerciseLogo from "@/components/custom_ui/oneexercise-logo";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import externalLinks from "@/lib/external-links";
import { gloria } from "./layout";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className="space-y-12"
    >
      <Nav />
      <Hero />
      
      <AppShowCase 
        src={externalLinks.OneExercise}
        title="Try 1Xercise (OneExercise)"
        name="OneExercise"
        aria-label="This iframe showcases my workout tracker app (1Xercsie)"
        left={
          <div
            className="flex flex-col place-items-center gap-[0.6rem]"
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
                "flex flex-col gap-3 text-body-medium"
              )
            }
          >
            <p
              className="text-m3-sys-light-primary text-[18px]"
            >Start slow and build up progress</p>
            <p>Immediate color coded feedback</p>
            <p>Master one exercise at a time</p>
          </div>
        }
      >
        
      </AppShowCase>
      
      <Footer />
    </main>
  );
}
