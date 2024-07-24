import { Button } from "../ui/button";

const IconButton = ({children}) => {
 return (
  <>
    <Button variant="ghost" className="text-title-large">
      {children}
    </Button>
  </> 
 ) 
}

export default IconButton