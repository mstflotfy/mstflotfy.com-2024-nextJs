import externalLinks from "@/lib/external-links"
import { FaYoutube, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoFigma } from "react-icons/io5";

const CustomLink = ({children, href="/", target="_blank", rel="noopener", ariaLabel=""}) => {
  return (
    <a href={href} target={target} rel={rel} aria-label={ariaLabel} className="hover:text-m3-white active:text-m3-white focus:text-m3-white transition-colors duration-200">
      {children}
    </a>
  )
}
const Footer = () => {
  
  return (
    <footer
      className="bg-m3-sys-light-surface-variant h-[41rem] mt-44 py-[6.4rem] text-center text-m3-sys-light-on-surface-variant"
    >
    
    <section className="flex space-x-8 text-title-large p-10 justify-center">
      <CustomLink href={externalLinks.indieDev} target="_blank" rel="noopener" aria-label="youtube">
        <FaYoutube />
      </CustomLink>
        <CustomLink href={externalLinks.github} target="_blank" rel="noopener" aria-label="GitHub">
          <FaGithub />
        </CustomLink>
        <CustomLink href={externalLinks.contact} target="_blank" rel="noopener" aria-label="Email">
          <MdEmail />
        </CustomLink>
        <CustomLink href={externalLinks.figma} target="_blank" rel="noopener" aria-label="Figma">
          <IoLogoFigma />
        </CustomLink>
      </section>
      
      <small>&copy; Mostafa Lotfy (mstflotfy) 2024. All rights reserved.</small>
    </footer>
  )
}

export default Footer