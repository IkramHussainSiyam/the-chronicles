import Image from "next/image";
import Link from "~/components/common/Link";
import routes from "~/lib/routes";
import { cn } from "~/lib/utils";

const Logo = ({
  size = "md",
  redirectTo = routes.home,
}: {
  size?: "sm" | "md";
  redirectTo?: string;
}) => {
  return (
    <Link href={redirectTo} className="flex items-center gap-2">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={36}
        height={36}
        className={cn(size === "sm" ? "size-7" : "size-7 sm:size-9")}
      />
      <span
        className={cn(
          "font-title font-semibold capitalize mt-1",
          size === "sm" ? "text-xl" : "text-xl sm:text-3xl"
        )}
      >
        The Chronicles
      </span>
    </Link>
  );
};

export default Logo;
