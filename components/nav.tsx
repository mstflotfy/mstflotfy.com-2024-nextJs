import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import IconButton from "@/components/custom_ui/icon-button";
import { cn } from "@/lib/utils";
import { gloria, freehand } from "@/app/layout";
import { TbMoonFilled } from "react-icons/tb";
import { FaYoutube, FaEnvelope } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CtaButton from "./custom_ui/cta-button";
import externalLinks from '@/lib/external-links'
import { ModeToggle } from "./mode-toggle";

const Nav = () => {
  
  return (
  <>
  <NavigationMenu 
    className="top-4 sticky flex max-w-none z-20"
  >
    <NavigationMenuList
      className="p-2 flex bg-m3-sys-light-surface-variant opacity-95  rounded-4xl items-center justify-center pr-3"
    >
      
      <NavigationMenuItem>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={cn(
            freehand.className,
             navigationMenuTriggerStyle(),
             'bg-transparent antialiased text-title-large',
          )
           }>
            mstflotfy
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem
        className={cn(
           navigationMenuTriggerStyle(),
           'bg-transparent antialiased',
        )
        }
      >
        <ModeToggle />
      </NavigationMenuItem>
      
      <div className="hidden flex-row gap-0 md:flex">
        <NavigationMenuItem
        >
          <Link href={externalLinks.indieDev} legacyBehavior passHref>
            <NavigationMenuLink 
              target="_blank"
              className={cn(
              navigationMenuTriggerStyle(),
              'bg-transparent antialiased',
            )
            }>
              <FaYoutube  className="text-title-medium"/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href={externalLinks.contact} legacyBehavior passHref>
            <NavigationMenuLink 
              target="_blank"
              className={cn(
              navigationMenuTriggerStyle(),
              'bg-transparent antialiased',
            )
            }>
              <FaEnvelope className="text-title-medium"/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </div>
        
      <NavigationMenuItem
        className="hidden xs:block"
      >
        <Link href="/selfmastery" legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              `${gloria.className}`,
               navigationMenuTriggerStyle(),
               'bg-transparent antialiased',
            )
            }
          >
            SelfMastery   
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <Link href={externalLinks.OneExercise} legacyBehavior passHref>
          <NavigationMenuLink
            target="_blank"
            className={cn(
              `${gloria.className}`,
               navigationMenuTriggerStyle(),
               'bg-transparent antialiased p-0 round-4xl',
               'hover:shadow-m-3-elevation-light-1 ',
               'focus:shadow-m-3-elevation-light-1'
            )
            }
          >
            <CtaButton>
              OneExercise
            </CtaButton>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
    </NavigationMenuList>
  </NavigationMenu>

  </> 
  )
}

export default Nav