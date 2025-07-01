import Image from "next/image";
import Container from "~/components/common/Container";
import Link from "~/components/common/Link";
import { Button } from "~/components/ui/button";
import routes from "~/lib/routes";

const Hero = () => {
  return (
    <div className="relative lg:overflow-hidden xl:overflow-auto">
      <Container className="my-10 flex items-center justify-between h-[calc(100vh-15rem)]">
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-5xl md:text-7xl font-title leading-[1.15]">
            Read, write and share your stories.
          </h1>
          <p className="font-heading text-xl md:text-2xl">
            A platform to share, read, write and extend your knowledge.
          </p>
          <Button
            asChild
            size={"lg"}
            className="text-base md:text-lg md:h-12 rounded-full"
          >
            <Link href={routes.auth.login}>Start Reading</Link>
          </Button>
        </div>
      </Container>
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 lg:translate-x-16 xl:-translate-x-0 right-0 select-none pointer-events-none">
        <Image src="/hero_image.webp" alt="Hero" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
