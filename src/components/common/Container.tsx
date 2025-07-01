import { cn } from "~/lib/utils";

const Container = ({ children, className, ...props }: PageContainerProps) => {
  return (
    <div {...props} className={cn("container my-5 sm:my-10", className)}>
      {children}
    </div>
  );
};

export default Container;

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
