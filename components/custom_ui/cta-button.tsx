interface CtaButtonProps {
  children: React.ReactNode;
}

const CtaButton: React.FC<CtaButtonProps> = ({children}) => {
 return (
   <div
     className="bg-m3-sys-light-primary-container text-m3-sys-light-on-primary-container p-[1.6rem] rounded-[1.6rem]"
   >
    {children}
   </div>
 ) 
}
export default CtaButton