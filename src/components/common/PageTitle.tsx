import { cn } from "~/lib/utils";

const PageTitle = ({ children, className, ...props }: Props) => {
  return (
    <h1
      {...props}
      className={cn("text-4xl font-semibold font-heading my-8", className)}
    >
      {children}
    </h1>
  );
};

export default PageTitle;

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}
