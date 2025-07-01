import { Trash2 } from "lucide-react";
import CommonCard from "~/components/common/CommonCard";
import Repeat from "~/components/helpers/Repeat";
import routes from "~/lib/routes";

const ProfileListPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-8">
      <Repeat
        times={3}
        render={(i) => (
          <CommonCard.Root
            key={i}
            className="flex-col-reverse md:flex-row bg-secondary"
          >
            <div className="flex-1 p-4">
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
              </CommonCard.Content>
              <CommonCard.Footer className="mt-2">
                <CommonCard.Stats text="Apr 6" />
                <CommonCard.Actions className="[&_svg]:size-4 hover:[&_svg]:stroke-foreground space-x-3">
                  <button>
                    <Trash2 />
                  </button>
                </CommonCard.Actions>
              </CommonCard.Footer>
            </div>
            <CommonCard.Image
              containerClassName="w-full md:w-52 md:h-40"
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

export default ProfileListPage;
