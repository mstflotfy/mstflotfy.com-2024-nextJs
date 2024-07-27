import DeviceFrame from "./custom_ui/device"
import externalLinks from "@/lib/external-links"

const AppShowCase = ({src='/', title='', name='', ariaLabel='an iframe that showcases an app i created', left, right}) => {
  return (
    <div
      className="relative flex flex-row items-center justify-center gap-[2.6rem]"
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
        className="border-2 absolute top-[17.8rem] bottom-[17.8rem] right-[5.7rem] left-[5.7rem]"
      >
      </div>
      
    </div>
  )
}
export default AppShowCase