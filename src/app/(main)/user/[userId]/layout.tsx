import { UserRoundPlus } from "lucide-react";
import Image from "next/image";
import Container from "~/components/common/Container";
import PageNavbar, { PageNavbarLinks } from "~/components/common/PageNavbar";
import { Button } from "~/components/ui/button";
import routes from "~/lib/routes";

const links: PageNavbarLinks[] = [
  { id: 1, name: "Home", href: routes.user.profile("ikramhussainsiyam") },
  {
    id: 2,
    name: "Lists",
    href: `${routes.user.profile("ikramhussainsiyam")}/lists`,
  },
  {
    id: 3,
    name: "About",
    href: `${routes.user.profile("ikramhussainsiyam")}/about`,
  },
  {
    id: 3,
    name: "History",
    href: `${routes.user.profile("ikramhussainsiyam")}/history`,
  },
];

const UserProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="my-0 lg:my-0">
      <div className="w-full bg-primary/80">
        <Image
          className="w-full object-cover"
          src="https://media.licdn.com/dms/image/v2/D5616AQELC6MFvkAjbg/profile-displaybackgroundimage-shrink_350_1400/B56ZbYcfynGgAY-/0/1747388072255?e=1754524800&v=beta&t=65bDzwJcEyHjqNg3BaqEcZqfBVJvNpgnK-KQ9HbrmOQ"
          alt="Ikram Hussain Siyam"
          width={1000}
          height={208}
        />
      </div>

      <div className="w-full md:max-w-5xl md:mx-auto">
        <div className="my-5 flex flex-col lg:flex-row lg:items-center gap-3.5 justify-between">
          <div className="flex lg:items-center gap-3.5">
            <div className="size-16 lg:size-24 overflow-hidden rounded-full">
              <Image
                className="size-full object-cover"
                src="https://avatars.githubusercontent.com/u/123804287?s=96&v=4"
                alt="Ikram Hussain"
                width={96}
                height={96}
              />
            </div>
            <div className="flex-1 space-y-1">
              <h1 className="text-xl lg:text-2xl font-semibold">
                Ikram Hussain Siyam
              </h1>
              <p className="text-sm text-muted-foreground">
                Frontend Web Developer | React | Next.js | Prisma
              </p>
              <span className="block text-xs text-muted-foreground">
                20k followers
              </span>
            </div>
          </div>
          <div>
            <Button className="rounded-full w-full lg:w-fit">
              <UserRoundPlus /> Follow
            </Button>
          </div>
        </div>

        <PageNavbar className="mt-10" links={links} />

        {children}
      </div>
    </Container>
  );
};

export default UserProfileLayout;
