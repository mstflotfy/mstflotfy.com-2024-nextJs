import externalLinks from "@/lib/external-links"
import { FaYoutube, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoFigma } from "react-icons/io5";
import CustomLink from "@/components/custom_ui/custom-external-link-icon"
import FooterNav from "./footer-nav";
import Link from "next/link";

const Footer = () => {
  
  return (
    <footer
      className="bg-m3-sys-light-surface-variant min-h-[41rem] pt-[6.4rem] p-[1.8rem] text-center text-m3-sys-light-on-surface-variant flex gap-[8.5rem] flex-col justify-between"
      aria-label="Site footer"
    >
    
    <FooterNav />
    
    <section>
      <section aria-label="Social Medi Links" className="flex space-x-8 text-title-large p-10 justify-center items-center">
        <CustomLink naked href={externalLinks.indieDev} target="_blank" rel="noopener" aria-label="youtube">
          <FaYoutube />
        </CustomLink>
          <CustomLink naked href={externalLinks.github} target="_blank" rel="noopener" aria-label="GitHub">
            <FaGithub />
          </CustomLink>
          <CustomLink naked href={externalLinks.contact} target="_blank" rel="noopener" aria-label="Email">
            <MdEmail />
          </CustomLink>
          <CustomLink naked href={externalLinks.figma} target="_blank" rel="noopener" aria-label="Figma">
            <IoLogoFigma />
          </CustomLink>
          
        </section>
        
        <div
          aria-label="Site Information"
          className="flex gap-4 justify-center items-center"
        >
          <small aria-label="copy rights">
            &copy; Mostafa Lotfy (mstflotfy) {new Date().getFullYear()}. All rights reserved.
          </small>
          |
          <Link 
            href="/about"
            className="text-label-large text-m3-sys-light-secondary transition-all duration-200 hover:text-m3-sys-light-on-surface delay-75 "
            aria-label="Learn more about Mostafa Lotfy"
          >
            About
          </Link>
        </div>
      </section>
      
    </footer>
  )
}

export default Footer