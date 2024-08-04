import React from "react"

interface LogoDisplayProps {
  children: React.ReactNode
  description?: string
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({children, description=''}) => {
  return (
    <div
      className="flex flex-col items-center space-y-4"
    >
      {children}
      <p
        className="text-label-small leading-label-small mt-2 max-w-[22rem]"
      >
        {description}
      </p>
    </div>
  )
}
export default LogoDisplay