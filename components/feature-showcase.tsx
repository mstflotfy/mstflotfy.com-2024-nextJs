'use client'

import externalLinks from "@/lib/external-links"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { roboto_mono } from "@/lib/fonts"
import { Button } from "./ui/button"
import DeviceFrame from "./custom_ui/device"
import { useState } from "react"
import { oneexerciseFeatures } from "@/lib/data"

interface FeatureButtonProps {
  feature: string
  description: string
  onclick: React.MouseEventHandler
  active: boolean
}

const FeatureCard: React.FC<FeatureButtonProps> = ({feature, description, onclick, active = false}) => {
  return (
    <>
    <Button
      variant="outline"
      onClick={onclick}
      className={
        cn(
          "flex flex-col gap-[1.6rem] p-[0.9rem] py-[2.1rem] h-auto rounded-[1.2rem] w-[30.6rem] hover:bg-m3-sys-light-secondary-container transition-colors",
          active && "bg-m3-sys-light-primary-container hover:bg-m3-sys-light-primary-container"
          )
      }
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
    </>
  )
}

export default function FeatureShowcase()  {
  const [ activeFeature, setActiveFeature ] = useState(0)
  
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
          src={oneexerciseFeatures[activeFeature].src}
          alt="OneExercise app feature"
          width={313.7}
          height={594.44}
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