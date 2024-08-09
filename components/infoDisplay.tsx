'use client'


import externalLinks from "@/lib/external-links"
import Image from "next/image"
import DeviceFrame from "./custom_ui/device"
import { useState, useEffect } from "react"
import { oneExerciseContent } from "@/lib/data"
import CarouselShowcase from "./carousel-showcase"


export default function InfoDisplay()  {
  const [ activeContent, setActiveContent ] = useState(0)

  
  return (
    <div
      aria-label="OneExercise Info"
      role="region"
      className="flex flex-col lg:flex-row place-items-center lg:gap-[5.2rem] min-h-[77.8rem] px-[3.2rem] justify-center" 
    >
    
      {/* Table for larger devices */}
        <div
          className="hidden lg:flex gap-[0.6rem] max-w-[61.8rem] border-[0.3rem] rounded-[1.2rem] min-w-[74.4rem] min-h-[67.2rem]"
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
        <DeviceFrame 
          src={externalLinks.OneExercise}
          small
          name="OneExercise"
          className="hidden lg:flex"
        >
          <Image
            src={oneExerciseContent[activeContent].src}
            alt={`OneExercise app feature: ${oneExerciseContent[activeContent].name}`}
            width={314}
            height={594}
          />
        </DeviceFrame>
      
      {/* for smaller devices switch to a carousel */}
      <CarouselShowcase 
        data={oneExerciseContent} 
      />
      
    </div>
  )
}
