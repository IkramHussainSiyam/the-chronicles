import { CircleCheckBig } from "lucide-react";
import Container from "~/components/common/Container";
import TextEditor from "~/components/common/editor";
import Link from "~/components/common/Link";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const NewStoryPage = () => {
  return (
    <Container className="my-8 sm:my-10">
      <div className="flex items-center gap-3 justify-between mb-8">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2 [&_svg]:size-5">
            <CircleCheckBig />
            Save as{" "}
            <Link
              href={"#draft"}
              className="underline hover:underline-offset-4"
            >
              draft
            </Link>
          </span>
          <span className="text-sm text-muted-foreground">Saving...</span>
        </div>
        <Button className="px-3 h-6 text-xs rounded-full bg-lime-600 hover:bg-lime-600/80">
          Publish
        </Button>
      </div>
      <div>
        <Input
          className="md:text-2xl text-2xl h-14 md:h-16 p-0 border-none focus-visible:ring-0 placeholder:text-muted-foreground/50 placeholder:font-normal font-heading font-semibold rounded-none dark:bg-transparent"
          placeholder="https://mybanner-url.com"
        />
        <Input
          className="md:text-5xl text-4xl h-14 mb-5 md:h-16 p-0 border-none focus-visible:ring-0 placeholder:text-muted-foreground/50 placeholder:font-normal font-heading font-semibold rounded-none dark:bg-transparent"
          placeholder="New to React?"
        />
        <TextEditor placeholder="React is a JavaScript..." />
      </div>
    </Container>
  );
};

export default NewStoryPage;
