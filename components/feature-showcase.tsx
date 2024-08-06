'use client'

import externalLinks from "@/lib/external-links"
import Image from "next/image"
import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { gloria, roboto_mono } from "@/app/layout"
import { Button } from "./ui/button"
import DeviceFrame from "./custom_ui/device"

const oneexerciseFeatures = [
  {
    name: 'FREE',
    description: 'OneExercise core features are free and will always be.'
  },
  {
    name: 'PRAVIVACY FOCUSED',
    description: 'OneExrcise does not track your activity, does not collect your data, and does not sell your data.'
  },
  {
    name: 'WEB APP',
    description: 'You can download it as a PWA. Or just open your browser and start tracking your workouts.'
  },
  {
    name: 'Works Offline',
    description: 'Offline-first. Auto-saves to your browser. '
  },
  {
    name: 'Export & Import',
    description: 'Back up your progress, or switch browsers, by exporting and importing your workouts and exercises.'
  },
  {
    name: 'Stats',
    description: 'OneExercise compares each new set to the very previous workout (for the same exercise) and gives you instant color coded feedback. And gives you other stats to track your progress.'
  },
  {
   name: 'Custom Exercises',
   description: 'Start with a short list of preset core exercises. You can also create your own list of Exercises and decide what you want to track for each exercise'
  },
  {
    name: 'Dark Mode',
    description: 'Choose the mode that best suits your environment. Or just let it follow your system’ color mode.'
  },
  {
    name: 'And more...',
    description: 'OneExercise is an active project so expect new features to pop up'
  }
]

interface FeatureButtonProps {
  feature: string
  description: string
}

const FeatureCard: React.FC<FeatureButtonProps> = ({feature, description}) => {
  return (
    <>
    <Button
      variant="outline"
      className="flex flex-col gap-[1.6rem] p-[0.9rem] py-[2.1rem] h-auto rounded-[1.2rem] w-[30.6rem]"
    >
      <h3
        className={
          cn(
            roboto_mono.className,
            "text-center text-headline-small leading-headline-small"
          )
        }
        >{feature.toUpperCase()}
      </h3>
      <p
        className="text-wrap text-body-medium leading-body-medium"
      >{description}</p>
    </Button>
    {/* <div>
      <Card
        className="hover:bg-black"
      >
        <CardHeader>
          <CardTitle
            className={
              cn(
                roboto_mono.className,
                "text-center"
              )
            }
          >{feature}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </div> */}
    </>
  )
}

export default function FeatureShowcase()  {
  return (
    <div
      aria-label="OneExercise features"
      className="flex place-items-center gap-[5.2rem] min-h-[77.8rem] px-[3.2rem] justify-center"
    >
      <DeviceFrame 
        src={externalLinks.OneExercise}
        small
        name="OneExercise"
      >
          <Image
            src="/images/OneExercise-workouts-page.jpg"
            alt="OneExercise app feature"
            width={428}
            height={908}
          />
      </DeviceFrame>
      
      <div
        aria-label="features"
        className="flex flex-wrap font-gloria gap-[0.6rem] max-w-[61.8rem]"
      >
        {
          oneexerciseFeatures.map((feat, index) => (
            <FeatureCard 
              key={index}
              feature={feat.name}
              description={feat.description}
              onclick={() => setActiveFeature(index)}
              active = {index === activeFeature}
            /> 
          ))
        }
      </div>
    </div>
  )
}