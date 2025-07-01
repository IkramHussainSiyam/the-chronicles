import CommonCard from "~/components/common/CommonCard";
import PageTitle from "~/components/common/PageTitle";
import Repeat from "~/components/helpers/Repeat";
import routes from "~/lib/routes";

const NotificationsPage = () => {
  return (
    <>
      <PageTitle className="border-b border-border/60 pb-5">
        Notifications
      </PageTitle>

      {/* <div className="pl-4 text-muted-foreground">
            No notifications yet.
          </div> */}

      <Repeat
        times={12}
        render={(i) => (
          <CommonCard.Root
            key={i}
            className="border-b border-border/60 pb-6 mb-6 last:border-none last:pb-0 last:mb-0"
          >
            <div>
              <CommonCard.UserInfo
                containerClassName="mb-2"
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
    </>
  );
};

export default NotificationsPage;
