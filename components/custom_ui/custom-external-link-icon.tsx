import { cn } from "@/lib/utils";
import React from "react"

interface CustomLinkProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  naked?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children, 
  href="/", 
  target="_blank", 
  rel="noopener", 
  ariaLabel="",
  naked = false
}) => {
  return (
    <a 
      href={href} 
      target={target} 
      rel={rel} 
      aria-label={ariaLabel} 
      className={
        cn(
          "text-m3-sys-light-link underline hover:no-underline transition-all duration-200 hover:text-m3-sys-light-on-surface delay-75 p-2 m-1",
          naked && "text-m3-sys-light-on-surface hover:text-m3-sys-light-secondary active:text-m3-sys-light-secondary focus:text-m3-sys-light-secondary",
        )
      }
    >
      {children}
    </a>
  )
}
export default CustomLink