import Link from "~/components/common/Link";
import If from "~/components/helpers/If";
import { Button } from "~/components/ui/button";
import routes from "~/lib/routes";

export default function ErrorPage({ message }: IErrorPageProps) {
  return (
    <div className="h-full my-28 grid place-items-center overflow-hidden">
      <div className="flex flex-col items-center gap-2 font-heading">
        <div className="text-[150px] sm:text-[300px] lg:text-[400px] xl:text-[450px] leading-[0.9] font-bold font-title">
          404
        </div>
        <div className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-2">
          Opps!
        </div>
        <div className="text-lg sm:text-xl flex flex-col items-center">
          <span>Looks like you are lost.</span>
          <If
            condition={message !== undefined}
            then={<span>{message}</span>}
            otherwise={<span>Requested page not found</span>}
          />
        </div>
        <Button asChild className="mt-5 text-base">
          <Link href={routes.home}>Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

interface IErrorPageProps {
  message?: string;
}
