import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import FeatureCard from "./feature-card"
import Image from "next/image"
import * as React from "react"
import { Feature } from "@/lib/data"
import DeviceFrame from "./custom_ui/device"
import externalLinks from "@/lib/external-links"
import NextVideo from "./NextVideo"

interface CarouselShowcaseProps {
  data: Feature[]
  cardSmallText?: boolean
}

const CarouselShowcase: React.FC<CarouselShowcaseProps> = 
({
    data,
    cardSmallText = true
  }) => {
    
  const contentLength = data.length
  
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  
  return (
    <Carousel
      setApi={setApi}
      className="ll:hidden block w-full m-auto"
      opts={{
        align: "center",
        loop: true
      }}
    >
      <CarouselContent
        className="-mx-[2.6rem]"
      >
        {
          data.map((content, index) => (
            <CarouselItem
              className="flex flex-col items-center gap-[0.8rem] basis-[90%]"
              key={index}
            >
            
              <FeatureCard
                feature={ content.name}
                description={content.description}
                active={current === index}
                onclick={() => {}}
                className="w-[90%]"
                smallText = {cardSmallText}
              />
              <small
                className="text-center"
              >{index + 1} of {contentLength}</small>
              { 
                // <DeviceFrame 
                //   src={externalLinks.OneExercise}
                //   small
                //   name="OneExercise"
                //   customWidth="w-[80%]"
                // >
                //   <Image
                //     src={data[current].src}
                //     alt={`OneExercise app feature: ${data[current].name}`}
                //     width={314}
                //     height={594}
                //   />
                // </DeviceFrame>
              }
              <NextVideo 
                src={data[current].src} 
              />
              
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export default CarouselShowcase