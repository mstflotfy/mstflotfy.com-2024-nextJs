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

const Nav = () => {
  return (
  <>
  <NavigationMenu 
    className="top-4 sticky flex max-w-none"
  >
    <NavigationMenuList
      className="bg-m3-sys-light-surface-variant opacity-95 p-10"
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
      
      <NavigationMenuItem>
            <IconButton />
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuLink>
            <IconButton />
          </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>
            <IconButton />
          </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/" legacyBehavior passHref>
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
      
    </NavigationMenuList>
  </NavigationMenu>

  </> 
  )
}

export default Nav