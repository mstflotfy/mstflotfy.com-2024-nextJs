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
import { cn } from "@/lib/utils";
import { gloria, freehand, roboto_mono } from "@/app/layout";
import LogoDisplay from "./custom_ui/logo-display";
import OneExerciseLogo from "./custom_ui/oneexercise-logo";
import IDLogo from "./custom_ui/theIndieDev-logo";

const FooterNav = () => {
  
  return (
  <>
  <NavigationMenu 
    className={
      cn(
        roboto_mono.className,
        "flex max-w-none text-title-large antialiased items-start"
      )
      }
  >
    <NavigationMenuList
      className="p-2 flex bg-m3-sys-light-surface-variant justify-center flex-col space-y-3 md:flex-row"
    >
      
      <NavigationMenuItem>
        <Link href="/oneexercise" legacyBehavior passHref>
          <NavigationMenuLink className={cn(
             navigationMenuTriggerStyle(),
             roboto_mono.className,
          )
           }>
            <LogoDisplay
              description="OneExercise workout tracker. Start slow and build up."
            >
              <OneExerciseLogo />
            </LogoDisplay>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
        
      <NavigationMenuItem>
        <Link href="/indiedev" legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
               navigationMenuTriggerStyle(),
            )
            }
          >
            <LogoDisplay
              description="Sharing some of the lessons I learn while building my own apps."
            >
              <IDLogo />
            </LogoDisplay>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
    </NavigationMenuList>
  </NavigationMenu>

  </> 
  )
}

export default FooterNav