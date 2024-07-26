const LogoDisplay = ({children, description=''}) => {
  return (
    <div
      className="flex flex-col items-center space-y-4"
    >
      {children}
      <p
        className="text-label-small mt-2 max-w-xs"
      >
        {description}
      </p>
    </div>
  )
}
export default LogoDisplay