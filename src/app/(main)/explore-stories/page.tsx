"use client";
import { Bookmark, UserRoundPlus } from "lucide-react";
import CommonCard from "~/components/common/CommonCard";
import Container from "~/components/common/Container";
import { MultiSelect } from "~/components/common/Multiselect";
import Repeat from "~/components/helpers/Repeat";
import routes from "~/lib/routes";

const ExploreStoriesPage = () => {
  return (
    <Container>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <MultiSelect
          label="Type"
          selectType="single"
          options={["Stories", "People"]}
        />
        <MultiSelect
          label="Topics"
          selectType="multiple"
          options={["Programming", "Graphic Design", "Family", "Phsycology"]}
        />
        <MultiSelect
          label="Sort By"
          selectType="single"
          defaultValue="Popularity"
          options={["Date", "Popularity", "Accending", "Descending"]}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <Repeat
          times={10}
          render={(i) => (
            <CommonCard.Root key={i} className="flex-col-reverse">
              <div>
                <CommonCard.UserInfo
                  containerClassName="mb-3"
                  userName="Ikram Hussain"
                  linkHref={routes.user.profile("ikramhussainsiyam")}
                  src="https://avatars.githubusercontent.com/u/123804287?s=96&v=4"
                  alt="Ikram Hussain"
                />
                <CommonCard.Content>
                  <CommonCard.Heading className="line-clamp-2 text-base font-semibold">
                    Avoid Server Actions for Data Fetching in Next.js 15
                  </CommonCard.Heading>
                  <CommonCard.Body className="line-clamp-2">
                    Why You Should Avoid Using Server CardActions for Data
                    Fetching in Next.js 15
                  </CommonCard.Body>
                </CommonCard.Content>
                <CommonCard.Footer className="mt-3">
                  <CommonCard.Stats text="Apr 6" likes={510} comments={10} />
                  <CommonCard.Actions className="[&_svg]:size-4 hover:[&_svg]:stroke-foreground space-x-3">
                    <button>
                      <Bookmark />
                    </button>
                    <button>
                      <UserRoundPlus />
                    </button>
                  </CommonCard.Actions>
                </CommonCard.Footer>
              </div>
              <CommonCard.Image
                containerClassName="w-full"
                className="size-full object-cover"
                src={
                  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*JRY9M5XUKTZO2DaI"
                }
                alt="Image"
                width={384}
                height={256}
              />
            </CommonCard.Root>
          )}
        />
      </div>
    </Container>
  );
};

export default ExploreStoriesPage;
