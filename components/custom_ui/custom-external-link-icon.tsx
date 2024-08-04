import React from "react"

interface CustomLinkProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children, 
  href="/", 
  target="_blank", 
  rel="noopener", 
  ariaLabel=""
}) => {
  return (
    <a href={href} target={target} rel={rel} aria-label={ariaLabel} className="text-m3-sys-light-on-surface hover:text-m3-sys-light-secondary active:text-m3-sys-light-secondary focus:text-m3-sys-light-secondary transition-colors duration-200">
      {children}
    </a>
  )
}
export default CustomLink