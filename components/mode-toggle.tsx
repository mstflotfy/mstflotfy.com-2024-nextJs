"use client"

// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { TbMoonFilled, TbSun } from "react-icons/tb";


export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div
      className="text-title-large"
    >
      <TbMoonFilled 
        className="dark:hidden"
      />
      <TbSun 
        className="hidden dark:block"
      />
    </div>
  )
}
