import CommonCard from "~/components/common/CommonCard";
import Link from "~/components/common/Link";
import For from "~/components/helpers/For";
import Repeat from "~/components/helpers/Repeat";
import { Badge } from "~/components/ui/badge";
import routes from "~/lib/routes";

const Sidebar = () => {
  return (
    <div className="border-l border-border/50 px-6 py-8 w-96 h-screen scroll-area sticky top-0 left-0 space-y-10 hidden lg:block">
      <div className="space-y-5 [&_h4]:font-medium">
        <h4>Popular Posts</h4>
        <div className="space-y-5">
          <Repeat
            times={3}
            render={(i) => (
              <CommonCard.Root key={i}>
                <div>
                  <CommonCard.UserInfo
                    containerClassName="mb-2 [&_a]:text-muted-foreground hover:[&_a]:text-foreground"
                    userName="Ikram Hussain"
                    linkHref={routes.user.profile("ikramhussainsiyam")}
                    src="https://avatars.githubusercontent.com/u/123804287?s=96&v=4"
                    alt="Ikram Hussain"
                  />
                  <CommonCard.Content>
                    <CommonCard.Heading className="text-base font-semibold">
                      Why You Should Avoid Using Server CardActions for Data
                      Fetching in Next.js 15
                    </CommonCard.Heading>
                  </CommonCard.Content>
                  <CommonCard.Footer className="mt-2">
                    <CommonCard.Stats text="Apr 6" />
                  </CommonCard.Footer>
                </div>
              </CommonCard.Root>
            )}
          />
        </div>
      </div>
      <div className="space-y-5 [&_h4]:font-medium">
        <h4>Popular Topics</h4>
        <div className="flex flex-wrap gap-2.5">
          <For
            each={[
              "react",
              "vue",
              "angular",
              "svelte",
              "nextjs",
              "nuxtjs",
              "javascript",
            ]}
            render={(topic) => (
              <Badge
                key={topic}
                variant={"secondary"}
                size={"md"}
                className="text-foreground/70 capitalize rounded-full"
                asChild
              >
                <Link
                  href={{
                    pathname: routes.explore_stories,
                    query: { topic },
                  }}
                >
                  {topic}
                </Link>
              </Badge>
            )}
          />
        </div>
      </div>
      <div className="space-y-5 [&_h4]:font-medium">
        <h4>Recently Saved</h4>
        <div className="space-y-5">
          <Repeat
            times={3}
            render={(i) => (
              <CommonCard.Root key={i}>
                <div>
                  <CommonCard.UserInfo
                    containerClassName="mb-2 [&_a]:text-muted-foreground hover:[&_a]:text-foreground"
                    userName="Ikram Hussain"
                    linkHref={routes.user.profile("ikramhussainsiyam")}
                    src="https://avatars.githubusercontent.com/u/123804287?s=96&v=4"
                    alt="Ikram Hussain"
                  />
                  <CommonCard.Content>
                    <CommonCard.Heading className="text-base font-semibold">
                      Why You Should Avoid Using Server CardActions for Data
                      Fetching in Next.js 15
                    </CommonCard.Heading>
                  </CommonCard.Content>
                  <CommonCard.Footer className="mt-2">
                    <CommonCard.Stats text="Apr 6" />
                  </CommonCard.Footer>
                </div>
              </CommonCard.Root>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
