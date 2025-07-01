import { Bookmark, UserRoundPlus } from "lucide-react";
import CommonCard from "~/components/common/CommonCard";
import Repeat from "~/components/helpers/Repeat";
import routes from "~/lib/routes";

const UserProfilePage = () => {
  return (
    <div className="pb-6">
      <Repeat
        times={2}
        render={(i) => (
          <CommonCard.Root
            key={i}
            className="border-b border-border/60 pb-6 mb-6 last:border-none last:pb-0 last:mb-0 flex-col-reverse md:flex-row"
          >
            <div className="flex-1">
              <CommonCard.UserInfo
                containerClassName="mb-2 gap-1.5"
                className="size-4 text-xs"
                userName="Ikram Hussain"
                linkHref={routes.user.profile("ikramhussainsiyam")}
                src="https://avatars.githubusercontent.com/u/123804287?s=96&v=4"
                alt="Ikram Hussain"
              />
              <CommonCard.Content>
                <CommonCard.Heading className="text-base font-semibold">
                  10 Lessons I Learned from a Principal Engineer That Made Me a
                  Better Developer
                </CommonCard.Heading>
                <CommonCard.Body>
                  Here are 10 powerful lessons I learned from a Principal
                  Engineer that transformed the way I code and think as a
                  developer.
                </CommonCard.Body>
              </CommonCard.Content>
              <CommonCard.Footer className="mt-2">
                <CommonCard.Stats text="Apr 6" likes={402} comments={83} />
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
              containerClassName="w-full md:w-fit"
              className="size-full object-cover"
              src={
                "https://miro.medium.com/v2/resize:fit:720/format:webp/1*cdLV5f2LaTruAxtiiO_w1g@2x.jpeg"
              }
              alt="Image"
            />
          </CommonCard.Root>
        )}
      />
    </div>
  );
};

export default UserProfilePage;
