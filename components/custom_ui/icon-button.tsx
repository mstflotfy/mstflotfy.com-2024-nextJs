import React from "react";
import { Button } from "../ui/button";

interface IconButtonProps {
  children: React.ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({children}) => {
 return (
  <>
    <Button variant="ghost" className="text-title-large">
      {children}
    </Button>
  </> 
 ) 
}

export default IconButton