import DeviceFrame from "./custom_ui/device"
import externalLinks from "@/lib/external-links"

const AppShowCase = ({src='/', title='', name='', ariaLabel='an iframe that showcases an app i created'}) => {
  return (
    <DeviceFrame 
      src={externalLinks.OneExercise}
      title="Try 1Xercise (OneExercise)"
      name="OneExercise"
      aria-label="This iframe showcases my workout tracker app (1Xercsie)"
    />
  )
}
export default AppShowCase