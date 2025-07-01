"use client";
import { useRouter } from "next/navigation";
import { FaDiscord, FaGithub, FaGoogle, FaXTwitter } from "react-icons/fa6";
import Link from "~/components/common/Link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import routes from "~/lib/routes";
import { cn } from "~/lib/utils";
import FormTerms from "./FormTerms";

export default function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const route = useRouter();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-transparent shadow-none p-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold font-heading">
            Join The Chronicles.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              route.push(routes.feed.index);
            }}
          >
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant={"outlined"}>
                  <FaGithub />
                  Signup with GitHub
                </Button>
                <Button variant={"outlined"}>
                  <FaGoogle />
                  Signup with Google
                </Button>
                <Button variant={"outlined"}>
                  <FaXTwitter />
                  Signup with X (Twitter)
                </Button>
                <Button variant={"outlined"}>
                  <FaDiscord />
                  Signup with Discord
                </Button>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link
                  href={routes.auth.login}
                  className="underline underline-offset-4"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <FormTerms />
    </div>
  );
}
