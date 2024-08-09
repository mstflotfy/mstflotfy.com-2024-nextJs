'use client'

import externalLinks from "@/lib/external-links"
import Image from "next/image"
import DeviceFrame from "./custom_ui/device"
import { useState } from "react"
import { oneexerciseFeatures } from "@/lib/data"
import FeatureCard from "./feature-card"
import CarouselShowcase from "./carousel-showcase"

export default function FeatureShowcase()  {
  const [ activeFeature, setActiveFeature ] = useState(0)
  
  return (
    <div
      aria-label="OneExercise features"
      role="region"
      className="flex place-items-center gap-[5.2rem] min-h-[77.8rem] px-[3.2rem] justify-center"
    >
    
    {/* Table for larger devices */}
      <div
        className="hidden ll:flex gap-[0.6rem] space-x-[5.2rem] place-items-center"
      >
      
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
      
      {/* for smaller devices switch to a carousel */}
      <CarouselShowcase 
        data={oneexerciseFeatures} 
        cardSmallText = { false }
      />
    </div>
  )
}