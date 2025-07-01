"use client";

import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import For from "../helpers/For";
import Link from "./Link";

const PageNavbar = ({ links, className }: Props) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <ul
      className={cn(
        "flex items-center gap-8 text-sm text-muted-foreground border-b [&_li]:pb-2.5 [&_li]:cursor-pointer hover:[&_li]:text-foreground [&_li]:border-b mb-6",
        className
      )}
    >
      <For
        each={links}
        render={(link) => (
          <li
            key={link.id}
            className={cn(
              isActive(link.href)
                ? "border-foreground text-foreground"
                : "border-transparent"
            )}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        )}
      />
    </ul>
  );
};

export default PageNavbar;

type Props = {
  links: PageNavbarLinks[];
  className?: string;
};

export type PageNavbarLinks = {
  id: string | number;
  name: string;
  href: string;
};
