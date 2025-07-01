import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Avatar from "~/components/ui/avatar";
import { cn } from "~/lib/utils";
import Show from "../helpers/Show";

const CommonCard = ({
  className,
  ...props
}: {} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn("flex items-center gap-6 w-full", className)}
    />
  );
};

const CommonCardUserInfo = ({
  linkHref,
  className,
  userName,
  containerClassName,
  ...props
}: {
  linkHref: string;
  userName: string;
  containerClassName?: string;
} & React.ComponentProps<typeof Avatar>) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm mb-3.5",
        containerClassName
      )}
    >
      <a href={linkHref}>
        <Avatar {...props} className={cn("size-5", className)} />
      </a>
      <a href={linkHref} className="link">
        {userName}
      </a>
    </div>
  );
};

const CommonCardContent = ({
  className,
  ...props
}: {} & React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("space-y-2", className)} />;
};

const CommonCardHeading = ({
  className,
  ...props
}: {} & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      {...props}
      className={cn(
        "text-2xl font-bold line-clamp-2 font-cardheading",
        className
      )}
    />
  );
};

const CommonCardBody = ({
  className,
  ...props
}: {} & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      {...props}
      className={cn("text-muted-foreground line-clamp-2 text-sm", className)}
    />
  );
};

const CommonCardFooter = ({
  className,
  ...props
}: {} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "mt-5 flex items-center gap-3 justify-between text-muted-foreground text-xs",
        className
      )}
    />
  );
};

const CommonCardStats = ({
  text,
  likes,
  comments,
  className,
  ...props
}: {
  text: string;
  likes?: number;
  comments?: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center gap-5 [&_svg]:size-[14px] [&_svg]:stroke-none [&_svg]:fill-muted-foreground",
        className
      )}
    >
      <span>{text}</span>
      <Show when={likes !== undefined}>
        <div className="flex items-center gap-1">
          <Heart />
          <span>{likes! > 999 ? "999+" : likes}</span>
        </div>
      </Show>
      <Show when={comments !== undefined}>
        <div className="flex items-center gap-1">
          <MessageCircle />
          <span>{comments! > 999 ? "999+" : comments}</span>
        </div>
      </Show>
    </div>
  );
};

const CommonCardActions = ({
  className,
  ...props
}: {} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "[&_svg]:fill-none space-x-5 [&_svg]:size-5 mr-2",
        className
      )}
    />
  );
};

const CommonCardImage = ({
  containerClassName,
  className,
  src,
  alt,
  width = 160,
  height = 160,
  ...props
}: {
  containerClassName?: string;
} & React.ComponentProps<typeof Image>) => {
  return (
    <div className={cn(containerClassName)}>
      <Image
        {...props}
        className={cn("w-40", className)}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

CommonCard.Root = CommonCard;
CommonCard.UserInfo = CommonCardUserInfo;
CommonCard.Content = CommonCardContent;
CommonCard.Heading = CommonCardHeading;
CommonCard.Body = CommonCardBody;
CommonCard.Footer = CommonCardFooter;
CommonCard.Stats = CommonCardStats;
CommonCard.Actions = CommonCardActions;
CommonCard.Image = CommonCardImage;

export default CommonCard;
