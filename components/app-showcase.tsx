import DeviceFrame from "./custom_ui/device"
import { ReactNode } from "react"

interface AppShowCaseProps {
  src?: string;
  title?: string;
  name?: string;
  ariaLabel?: string;
  left?: ReactNode;
  right?: ReactNode;
}

const AppShowCase: React.FC<AppShowCaseProps> = ({
  src='/', 
  title='', 
  name='', 
  ariaLabel='an iframe that showcases an app I created', 
  left = null, 
  right = null
}) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center lg:flex-row gap-[3.6rem] border-2 xl:border-none py-[3.4rem] mx-12 text-center xl:text-left"
    >
      {left}
      
      <DeviceFrame 
        src={src}
        title={title}
        name={name}
        aria-label={ariaLabel}
      />
      
      {right}
      
      <div
        className="border-2 absolute top-0 xl:top-[17.8rem] bottom-0 xl:bottom-[17.8rem] w-[400px] sm:w-auto sm:right-[5.7rem] sm:left-[5.7rem] hidden xl:block"
      >
      </div>
      
    </div>
  )
}
export default AppShowCase