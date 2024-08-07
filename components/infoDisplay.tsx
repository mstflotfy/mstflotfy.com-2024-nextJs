'use client'

import externalLinks from "@/lib/external-links"
import Image from "next/image"
import DeviceFrame from "./custom_ui/device"
import { useState } from "react"
import { oneExerciseContent } from "@/lib/data"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"

export default function InfoDisplay()  {
  const [ activeContent, setActiveContent ] = useState(0)
  
  return (
    <div
      aria-label="OneExercise Info"
      role="region"
      className="flex flex-col xl:flex-row place-items-center gap-[5.2rem] min-h-[77.8rem] px-[3.2rem] justify-center" 
    >
    
      <div
        className="hidden xl:flex gap-[0.6rem] max-w-[61.8rem] border-[0.3rem] rounded-[1.2rem] min-w-[74.4rem] min-h-[67.2rem]"
      >
      
        <ul
          aria-label="table of content"
          className="flex flex-col border-r-[0.2rem] py-[4.9rem] px-[2.6rem] gap-[1.5rem] text-label-medium"
          
        >
          {
            oneExerciseContent.map((content, index) => (
              <li
                className={`
                    text-nowrap cursor-pointer hover:text-m3-sys-light-secondary transition-all duration-100 ease-in-out"
                    ${index === activeContent && 'text-m3-sys-light-primary hover:text-m3-sys-light-primary'}
                    ${index === activeContent && 'text-label-large'}
                  `}
                key={index}
                onClick={() => setActiveContent(index)}
              >
                {content.name}
              </li>
            ))
          }
        </ul>
      
      <div
        className="py-[4.9rem] px-[2.6rem] text-body-large leading-body-large tracking-body-large space-y-8"
      >
        {
          oneExerciseContent[activeContent].description.split('\n').map((paragraph, index) => (
            <p
              key={index}
            >
              {paragraph}
            </p>
          ))
        }
      </div>
      
      </div>
      
      <Carousel
        className="xl:hidden"
      >
        <CarouselContent>
          {
            oneExerciseContent.map((content, index) => (
              <CarouselItem
                key={index}
              >
                <Card>
                  <CardContent className="flex flex-col space-y-4 text-body-small items-center justify-center p-6">
                    {
                      content.description.split('\n').map((paragraph, index) => (
                        <p
                          key={index}
                        >
                          {paragraph}
                        </p>
                      ))
                    }
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      
      <DeviceFrame 
        src={externalLinks.OneExercise}
        small
        name="OneExercise"
      >
        <Image
          src={oneExerciseContent[activeContent].src}
          alt={`OneExercise app feature: ${oneExerciseContent[activeContent].name}`}
          width={313.7}
          height={594.44}
        />
      </DeviceFrame>
    </div>
  )
}
