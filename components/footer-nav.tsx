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

const FooterNav = () => {
  
  return (
  <>
  <NavigationMenu 
    className={
      cn(
        roboto_mono.className,
        "flex max-w-none text-title-large antialiased"
      )
      }
  >
    <NavigationMenuList
      className="p-2 flex bg-m3-sys-light-surface-variant items-center justify-center"
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
              description="OneExercise workout tracker. Start slow and build up."
            >
              <p>The indieDev</p>
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