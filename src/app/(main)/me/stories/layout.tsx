import Link from "~/components/common/Link";
import PageNavbar, { PageNavbarLinks } from "~/components/common/PageNavbar";
import PageTitle from "~/components/common/PageTitle";
import { Button } from "~/components/ui/button";

const links: PageNavbarLinks[] = [
  {
    id: 1,
    name: "Drafts",
    href: "/me/stories",
  },
  {
    id: 2,
    name: "Published",
    href: "/me/stories/published",
  },
  {
    id: 3,
    name: "Private",
    href: "/me/stories/private",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-8">
      <PageTitle className="flex items-center gap-3 justify-between">
        <span>Your stories</span>
        <Button asChild className="rounded-full font-body">
          <Link href={"/new-story"}>Write a story</Link>
        </Button>
      </PageTitle>
      <PageNavbar links={links} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
