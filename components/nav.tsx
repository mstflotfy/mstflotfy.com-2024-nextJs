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
import { CiDark } from "react-icons/ci";
import { TbMoonFilled } from "react-icons/tb";
import { FaYoutube, FaMoon } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Nav = () => {
  return (
  <>
  <NavigationMenu 
    className="top-4 sticky flex max-w-none"
  >
    <NavigationMenuList
      className="flex bg-m3-sys-light-surface-variant opacity-95 p-9 rounded-4xl items-center justify-center"
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
        <IconButton>
          <TbMoonFilled />
        </IconButton>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuLink>
            <IconButton>
              <FaYoutube />
            </IconButton>
          </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>
          <IconButton>
            <MdEmail />
          </IconButton>
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