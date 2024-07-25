const CustomLink = ({children, href="/", target="_blank", rel="noopener", ariaLabel=""}) => {
  return (
    <a href={href} target={target} rel={rel} aria-label={ariaLabel} className="hover:text-m3-white active:text-m3-white focus:text-m3-white transition-colors duration-200">
      {children}
    </a>
  )
}
export default CustomLink