import { type NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "~/components/common/Link";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import routes from "~/lib/routes";

const LandingNavMenu = (props: NavigationMenuProps) => {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="nav-menu gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        <NavigationMenuItem className="hidden sm:block">
          <Link href={routes.auth.login}>Login</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={routes.auth.signup}>
            <Button className="rounded-full">Sign Up</Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default LandingNavMenu;
