import { Bell, Search, SquarePen } from "lucide-react";
import Link from "~/components/common/Link";
import ProfileMenu from "./ProfileMenu";

const FeedNavMenu = () => {
  return (
    <div className="flex items-center gap-5 md:gap-8">
      <Link
        href="/new-story"
        className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground"
      >
        <SquarePen />
        <span>Write</span>
      </Link>
      <Link
        href={"/me/notifications"}
        className="hidden md:block text-muted-foreground hover:text-foreground"
      >
        <Bell />
      </Link>
      <Link
        href={"/explore-stories"}
        className="block lg:hidden text-muted-foreground hover:text-foreground"
      >
        <Search />
      </Link>
      <ProfileMenu />
    </div>
  );
};

export default FeedNavMenu;
