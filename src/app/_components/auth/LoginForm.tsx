import { FaDiscord, FaGithub, FaGoogle, FaXTwitter } from "react-icons/fa6";
import Link from "~/components/common/Link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import routes from "~/lib/routes";
import { cn } from "~/lib/utils";
import FormTerms from "./FormTerms";

export default function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-transparent shadow-none p-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold font-heading">
            Welcome Back.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant={"outlined"}>
                  <FaGithub />
                  Login with GitHub
                </Button>
                <Button variant={"outlined"}>
                  <FaGoogle />
                  Login with Google
                </Button>
                <Button variant={"outlined"}>
                  <FaXTwitter />
                  Login with X (Twitter)
                </Button>
                <Button variant={"outlined"}>
                  <FaDiscord />
                  Login with Discord
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href={routes.auth.signup}
                  className="underline underline-offset-4"
                >
                  Sign up
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
