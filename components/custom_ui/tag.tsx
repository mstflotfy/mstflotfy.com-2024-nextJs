import React from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface TagProps {
  text: string
  size?: 'small'|'large'
}
const Tag: React.FC<TagProps> = (
  {
    text = "Tag",
    size = "large"
  }
) => {
  return (
      <Button
        variant="outline"
        className={
          cn(
            "!text-label-large leading-label-large tracking-label-large font-roboto-mono hover:bg-m3-sys-light-secondary-container px-[2.6rem] py-[1.8rem] focus:bg-m3-sys-light-secondary-container rounded-full",
            size === 'small' && "px-[1.2rem] py-[0.4rem] !text-label-medium leading-label-medium tracking-label-medium"
          )
        }
      >
        {text}
      </Button>
  )
}
export default Tag