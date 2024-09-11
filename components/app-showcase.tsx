import { cn } from "@/lib/utils";
import DeviceFrame from "./custom_ui/device"
import { ReactNode } from "react"

interface AppShowCaseProps {
  src?: string;
  title?: string;
  name?: string;
  ariaLabel?: string;
  left?: ReactNode;
  right?: ReactNode;
  border?: boolean;
  small?: boolean;
  labelTop?: string;
  customWidth?: string;
  className?: string;
}

const AppShowCase: React.FC<AppShowCaseProps> = ({
  src='/', 
  title='', 
  name='', 
  ariaLabel='an iframe that showcases an app I created', 
  left = null, 
  right = null,
  border = true,
  small = false,
  labelTop = '',
  customWidth,
  className
}) => {
  return (
    <div
      className={
        cn(
          "relative flex flex-col items-center justify-center lg:flex-row gap-[3.6rem] py-[3.4rem] mx-12 text-center xl:text-left xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-[0rem]",
          border && 'border-2 xl:border-none',
          className
          )
      }
        >
      {left}
      
      <DeviceFrame 
        src={src}
        title={title}
        name={name}
        aria-label={ariaLabel}
        small = {small ?? false}
        labelTop={labelTop}
        customWidth={customWidth}
        className="mr-8"
      />
      
      {right}
      
      {
        border &&
        <div
          className="border-2 absolute top-0 xl:top-[17.8rem] bottom-0 xl:bottom-[17.8rem] w-[400px] sm:w-auto sm:right-[5.7rem] sm:left-[5.7rem] hidden xl:block"
        >
        </div>
      }
      
    </div>
  )
}
export default AppShowCase