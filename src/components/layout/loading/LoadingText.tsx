import Show from "~/components/helpers/Show";
import { cn } from "~/lib/utils";
import "../../../styles/motion/loading-text.css";

export default function LoadingText({
  className,
  showDots = false,
  noText = false,
  containerClassName,
  ...props
}: ILoadingTextProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-col gap-5",
        containerClassName
      )}
    >
      <Show when={!noText}>
        <span
          {...props}
          className={cn(
            "text-2xl font-heading loading-text before:content-['Loading...']",
            className
          )}
        />
      </Show>

      <Show when={showDots}>
        <div className="loading-dot"></div>
      </Show>
    </div>
  );
}

type ILoadingTextProps = {
  showDots?: boolean;
  noText?: boolean;
  containerClassName?: string;
} & React.HTMLAttributes<HTMLSpanElement>;
