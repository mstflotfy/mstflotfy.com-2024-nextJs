import OneExerciseLogo from "@/components/custom_ui/oneexercise-logo"
import AppShowCase from "@/components/app-showcase"
import { cn } from "@/lib/utils"
import externalLinks from "@/lib/external-links"
import { gloria } from "@/lib/fonts";
import FeatureShowcase from "@/components/feature-showcase";
import InfoDisplay from "@/components/infoDisplay";
import type { Metadata } from "next";

export const metadata = {
  title: "OneExercise - Minimal Workout Tracker",
  description: 'OneExercise is a minimal workout tracker that helps you start slow and build up one exercise at a time, making fitness accessible and manageable.',
  keywords: ['workout tracker', 'fitness app', 'exercise', 'OneExercise', 'indie app', 'Mostafa Lotfy'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'mstflotfy',
    title: 'OneExercise - Your Personal Workout Tracker',
    description: 'Discover OneExercise, the minimal workout tracker designed to help you improve one exercise at a time.',
    url: 'https://mstflotfy.com/oneexercise',
    images: [
      {
        url: 'https://mstflotfy.com/images/OneExercise-workout-tracker.png', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "OneExercise App Screenshot",
      },
    ],
  },
  alternates: {
    canonical: 'https://mstflotfy.com/oneexercise',
  }
};

export default function OneExercise() {
  return (
      <main>
        
        <div
          className="bg-m3-custom-light-green -mt-[7rem] pt-[10.6rem] md:pt-[10rem] pb-[4.6rem] md:pb-[6.8rem] " 
          // className="bg-m3-custom-light-green pt-[6.3rem] space-y-[4.6rem] pb-[4.6rem] md:pt-[10rem] md:pb-[21.8rem]" 
        >
        <header 
          aria-label="Page header"
          className="flex items-center md:p-16 mt-0 md:mt-[1.6rem]"
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
                className="flex flex-col lg:place-items-end gap-[0.6rem]"
              >
                <p
                  className={
                    cn(
                      gloria.className,
                      "text-m3-sys-light-primary",
                      "text-nowrap"
                    )
                  }
                >The single-exercise workout-tracker</p>
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
         className="bg-m3-custom-light-yellow pt-[6.3rem] space-y-[4.6rem] pb-[4.6rem] md:pt-[10rem] md:pb-[21.8rem]" 
         id="OneExercise-features"
        >
          <h2
          className={
            cn(
              "text-headline-large md:text-mstf-h2 text-center max-w-[370px] md:max-w-[650px] leading-mstf-headline-large tracking-mstf-headline-large mx-auto md:mb-[7.8rem]",
              gloria.className
              )
          }
          >Features</h2>
          
          <FeatureShowcase />
        </section>

        <section
         className="bg-m3-custom-light-red pt-[6.3rem] space-y-[4.6rem] pb-[4.6rem] md:pt-[10rem] md:pb-[21.8rem]" 
         id="how-to-use-OneExercise"
        >
          <h2
          className={
            cn(
              "text-headline-large md:text-mstf-h2 text-center max-w-[370px] md:max-w-[650px] leading-mstf-headline-large tracking-mstf-headline-large mx-auto md:mb-[7.8rem]",
              gloria.className
              )
          }
          >How To Use OneExercise</h2>
          
          <InfoDisplay />
          
        </section>
      </main>
  )
}