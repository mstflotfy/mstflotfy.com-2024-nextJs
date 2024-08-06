'use client'

import externalLinks from "@/lib/external-links"
import Image from "next/image"
import DeviceFrame from "./custom_ui/device"
import { useState } from "react"
import { oneexerciseFeatures } from "@/lib/data"
import FeatureCard from "./feature-card"

export default function InfoDisplay()  {
  const [ activeFeature, setActiveFeature ] = useState(0)
  
  return (
    <div
      aria-label="OneExercise features"
      role="region"
      className="flex place-items-center gap-[5.2rem] min-h-[77.8rem] px-[3.2rem] justify-center"
    >
    
      <div
        aria-label=""
        className="flex flex-wrap gap-[0.6rem] max-w-[61.8rem] border-[0.3rem] rounded-[1.2rem] min-w-[74.4rem] min-h-[67.2rem]"
      >
      
        <ul
          aria-label="table of content"
          className="flex flex-col border-r-[0.2rem] py-[2.3rem] px-[4.9rem] gap-[1.5rem] text-label-medium"
          
        >
         <li>Intro</li> 
         <li>Creating a new workout</li> 
        </ul>
      
      <p
        className="py-[4.8rem] px-[2.6rem] text-body-large"
      >
       Details here 
      </p>
      
      </div>
      
      
      <DeviceFrame 
        src={externalLinks.OneExercise}
        small
        name="OneExercise"
      >
        <Image
          src={oneexerciseFeatures[activeFeature].src}
          alt={`OneExercise app feature: ${oneexerciseFeatures[activeFeature].name}`}
          width={313.7}
          height={594.44}
        />
      </DeviceFrame>
    </div>
  )
}