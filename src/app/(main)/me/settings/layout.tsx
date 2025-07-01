import PageNavbar, { PageNavbarLinks } from "~/components/common/PageNavbar";
import PageTitle from "~/components/common/PageTitle";

const links: PageNavbarLinks[] = [
  {
    id: 1,
    name: "Profile",
    href: "/me/settings",
  },
  {
    id: 2,
    name: "Account",
    href: "/me/settings/account",
  },
  {
    id: 3,
    name: "General",
    href: "/me/settings/general",
  },
];

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PageTitle>Settings</PageTitle>
      <PageNavbar links={links} />
      {children}
    </div>
  );
};

export default SettingsLayout;
