"use client"

// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { TbMoonFilled, TbSun } from "react-icons/tb";
import { Button } from "./ui/button";


export function ModeToggle() {
  const { setTheme } = useTheme()
  const { theme } = useTheme()
  
  //const clickSound = new Audio('/click.mp3')

  const toggle = () => {
    //clickSound.play()
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }
  
  return (
    <Button
      variant="ghost"
      className="text-title-large"
      onClick={toggle}
    >
      <TbMoonFilled 
        className="dark:hidden"
      />
      <TbSun 
        className="hidden dark:block"
      />
    </Button>
  )
}
