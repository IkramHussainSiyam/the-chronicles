import { Bell, Cog, ScrollText, SquarePen, User } from "lucide-react";
import Link from "~/components/common/Link";
import For from "~/components/helpers/For";
import Avatar from "~/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import routes from "~/lib/routes";
import { cn } from "~/lib/utils";
import LogoutButton from "./LogoutButton";

const ProfileMenu = () => {
  const links = [
    {
      id: 1,
      name: "Profile",
      href: routes.user.profile("ikramhussainsiyam"),
      icon: User,
    },
    {
      id: 123,
      name: "Write Story",
      href: routes.new_story,
      icon: SquarePen,
    },
    {
      id: 3,
      name: "Stories",
      href: routes.me.stories.index,
      icon: ScrollText,
    },
    {
      id: 45,
      name: "Notifications",
      href: routes.me.notifications,
      icon: Bell,
    },
    {
      id: 5,
      name: "Settings",
      href: routes.me.settings.index,
      icon: Cog,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          src="https://avatars.githubusercontent.com/u/123804287?v=4"
          alt="Ikram Hussain"
          fallbackText="IH"
        />
      </PopoverTrigger>
      <PopoverContent align="end" className="mt-4 p-0">
        <div className="py-4">
          <For
            each={links}
            render={(link) => (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  "px-6 py-3 text-muted-foreground hover:text-foreground flex items-center gap-2.5",
                  (link.name === "Notifications" ||
                    link.name === "Write Story") &&
                    "flex md:hidden"
                )}
              >
                <link.icon />
                {link.name}
              </Link>
            )}
          />
          <LogoutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileMenu;
