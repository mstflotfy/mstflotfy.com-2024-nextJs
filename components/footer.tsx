import externalLinks from "@/lib/external-links"
import { FaYoutube, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoFigma } from "react-icons/io5";
import CustomLink from "@/components/custom_ui/custom-external-link-icon"
import FooterNav from "./footer-nav";

const Footer = () => {
  
  return (
    <footer
      className="bg-m3-sys-light-surface-variant h-[41rem] mt-44 pt-[6.4rem] p-[1.8rem] text-center text-m3-sys-light-on-surface-variant flex flex-col justify-between"
    >
    
    <FooterNav />
    
    <div>
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
      </div>
    </footer>
  )
}

export default Footer