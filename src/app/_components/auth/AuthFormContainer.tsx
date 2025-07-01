import Image from "next/image";
import Link from "~/components/common/Link";
import routes from "~/lib/routes";

const AuthFormContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-[420px] flex-col gap-6">
        <Link
          href={routes.home}
          className="flex items-center gap-1 self-center font-medium text-lg"
        >
          <Image src={"/logo.svg"} alt={"Logo"} width={36} height={36} />
          The Chronicles.
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthFormContainer;
