import Sidebar from "~/app/_components/Sidebar";
import Container from "~/components/common/Container";
import PageNavbar, { PageNavbarLinks } from "~/components/common/PageNavbar";
import routes from "~/lib/routes";

const links: PageNavbarLinks[] = [
  {
    id: 1,
    name: "For you",
    href: routes.feed.index,
  },
  {
    id: 2,
    name: "Following",
    href: routes.feed.following,
  },
  {
    id: 3,
    name: "Saved",
    href: routes.feed.saved,
  },
  {
    id: 4,
    name: "Private",
    href: routes.feed.private,
  },
];

const FeedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="my-0 sm:my-0">
      <PageNavbar className="text-xs gap-6 mt-8" links={links} />
      <div className="flex gap-16 justify-between mb-8">
        <div className="flex-1">{children}</div>
        <Sidebar />
      </div>
    </Container>
  );
};

export default FeedLayout;
