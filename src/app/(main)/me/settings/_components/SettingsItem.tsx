import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { cn } from "~/lib/utils";

const SettingsItem = ({
  className,
  ...props
}: {} & React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("space-y-3", className)} />;
};

const SettingsItemTitle = ({
  className,
  ...props
}: {} & React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return <h4 {...props} className={cn("flex-1", className)} />;
};

const SettingsItemInput = ({
  className,

  ...props
}: {} & React.ComponentProps<typeof Input>) => {
  return (
    <Input {...props} className={cn("bg-secondary border-none", className)} />
  );
};

const SettingsItemTextarea = ({
  className,
  rows = 3,
  ...props
}: {} & React.ComponentProps<typeof Textarea>) => {
  return (
    <Textarea
      {...props}
      className={cn("bg-secondary border-none resize-none", className)}
      rows={rows}
    />
  );
};

const SettingsItemFooter = ({
  className,
  ...props
}: {} & React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center gap-3 justify-between text-sm",
        className
      )}
    />
  );
};

const SettingsItemDescription = ({
  className,
  ...props
}: {} & React.HtmlHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("text-muted-foreground text-sm", className)}
    />
  );
};

const SettingsItemAction = ({
  className,
  children,
  ...props
}: {} & React.ComponentProps<typeof Button>) => {
  return (
    <Button {...props} className={cn(className)}>
      {children}
    </Button>
  );
};

const SettingsItemCharecterCount = ({
  className,
  totalCount,
  currentCount,
  ...props
}: {
  totalCount: number;
  currentCount: number;
} & React.HtmlHTMLAttributes<HTMLInputElement>) => {
  return (
    <span {...props} className={cn("text-foreground pl-2", className)}>
      {currentCount}
      <span className="text-muted-foreground">/{totalCount}</span>
    </span>
  );
};

SettingsItem.Title = SettingsItemTitle;
SettingsItem.Input = SettingsItemInput;
SettingsItem.Textarea = SettingsItemTextarea;
SettingsItem.Footer = SettingsItemFooter;
SettingsItem.Description = SettingsItemDescription;
SettingsItem.Action = SettingsItemAction;
SettingsItem.CharecterCount = SettingsItemCharecterCount;
export default SettingsItem.Root = SettingsItem;
