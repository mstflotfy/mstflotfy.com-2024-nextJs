import { cn } from "@/lib/utils"
import { roboto_mono } from "@/lib/fonts"
import { Button } from "./ui/button"

interface FeatureButtonProps {
  feature: string
  description: string
  onclick: React.MouseEventHandler
  active: boolean
  className?: string
  smallText?: boolean
}
const FeatureCard: React.FC<FeatureButtonProps> = ({
  feature, 
  description, 
  onclick, 
  active = false,
  className,
  smallText = false
  
}) => {
  return (
    <>
    <Button
      variant="outline"
      onClick={onclick}
      className={
        cn(
          "flex flex-col gap-[1.6rem] p-[0.9rem] py-[2.1rem] h-auto rounded-[1.2rem] w-[30.6rem] hover:bg-m3-sys-light-secondary-container transition-colors",
          active && "bg-m3-sys-light-primary-container hover:bg-m3-sys-light-primary-container",
          className,
          )
      }
    >
      <h3
        className={
          cn(
            roboto_mono.className,
            "text-center text-headline-small leading-headline-small",
            smallText ? "text-title-small" : ""
          )
        }
        >{feature.toUpperCase()}
      </h3>
      <div
        className={
          cn(
            "text-wrap text-body-medium leading-body-medium",
           smallText ? "text-body-small leading-body-small" : ""
          )
        }
      >
        <p>
          {description}
        </p>
      </div>
    </Button>
    </>
  )
}
export default FeatureCard