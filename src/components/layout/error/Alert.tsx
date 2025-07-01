import { cva } from "class-variance-authority";
import { FaCircleCheck } from "react-icons/fa6";
import Show from "~/components/helpers/Show";
import { cn } from "~/lib/utils";

export default function Alert({
  className,
  variant,
  size = "sm",
  details,
  message = "Something went wrong!",
  ...props
}: IAlertProps) {
  const alertVariants = cva(
    "px-5 py-3.5 rounded-lg flex gap-2.5 border border-transparent",
    {
      variants: {
        variant: {
          success:
            "bg-lime-50 text-lime-800 border-lime-200 dark:bg-lime-900/15 dark:text-lime-400 dark:border-lime-900/20",
          error:
            "bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-900/15 dark:text-rose-400 dark:border-rose-900/20",
          warning:
            "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/15 dark:text-amber-400 dark:border-amber-900/20",
          info: "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-900/15 dark:text-sky-400 dark:border-sky-900/20",
          default:
            "bg-zinc-50 text-zinc-800 border-zinc-200 dark:bg-zinc-900/50 dark:text-zinc-400 dark:border-zinc-900",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  const sizeStyles = (classes: [string, string, string]) => {
    switch (size) {
      case "sm":
        return classes[0];
      case "md":
        return classes[1];
      case "lg":
        return classes[2];
    }
  };

  return (
    <div {...props} className={cn(alertVariants({ variant, className }))}>
      <div>
        <FaCircleCheck
          className={cn(
            sizeStyles([
              "text-sm mt-[3px]",
              "text-base mt-1",
              "text-lg mt-[5px]",
            ])
          )}
        />
      </div>
      <div className="space-y-0.5 flex-1">
        <h4
          className={cn(
            "font-medium font-heading",
            sizeStyles(["text-sm", "text-base", "text-lg"])
          )}
        >
          {message}
        </h4>
        <Show when={details !== undefined}>
          <p
            className={cn(
              "opacity-80",
              sizeStyles(["text-xs", "text-xs", "text-sm"])
            )}
          >
            {details}
          </p>
        </Show>
      </div>
    </div>
  );
}

interface IAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  details?: string;
  variant?: "success" | "error" | "warning" | "info" | "default";
  size?: "sm" | "md" | "lg";
}
