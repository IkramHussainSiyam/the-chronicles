import { cn } from "~/lib/utils";

const Navbar = ({
  children,
  containerClassName,
  className,
}: {
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}) => {
  return (
    <header className="sticky inset-0 z-[99] border-b border-border/50 bg-background">
      <nav
        className={cn(
          "h-20 flex items-center justify-between",
          className,
          containerClassName ? containerClassName : "container"
        )}
      >
        {children}
      </nav>
    </header>
  );
};

export default Navbar;
