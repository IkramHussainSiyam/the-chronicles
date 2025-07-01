import { PenLine, Trash2 } from "lucide-react";
import CommonCard from "~/components/common/CommonCard";
import Repeat from "~/components/helpers/Repeat";

const PublishedStoriesPage = () => {
  return (
    <div>
      <Repeat
        times={3}
        render={(i) => (
          <CommonCard.Root
            key={i}
            className="border-b border-border/60 pb-6 mb-6 last:border-none last:pb-0 last:mb-0"
          >
            <div>
              <CommonCard.Content>
                <CommonCard.Heading className="text-base font-semibold">
                  Avoid Server Actions for Data Fetching in Next.js 15
                </CommonCard.Heading>
                <CommonCard.Body>
                  Why You Should Avoid Using Server CardActions for Data
                  Fetching in Next.js 15
                </CommonCard.Body>
              </CommonCard.Content>
              <CommonCard.Footer className="mt-2">
                <CommonCard.Stats text="Last edited 1 day ago" />
                <CommonCard.Actions className="[&_svg]:size-[14px] space-x-3">
                  <button>
                    <PenLine className="hover:stroke-foreground" />
                  </button>
                  <button>
                    <Trash2 className="hover:stroke-destructive" />
                  </button>
                </CommonCard.Actions>
              </CommonCard.Footer>
            </div>
          </CommonCard.Root>
        )}
      />
    </div>
  );
};

export default PublishedStoriesPage;
