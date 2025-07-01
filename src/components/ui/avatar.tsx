"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "~/lib/utils";

function AvatarRoot({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  );
}

export { AvatarRoot, AvatarImage, AvatarFallback };

export default function Avatar({
  src,
  className,
  alt,
  fallbackText,
  ...props
}: Props) {
  return (
    <AvatarRoot {...props} className={cn(className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className={cn(className)}>{fallbackText}</AvatarFallback>
    </AvatarRoot>
  );
}

interface Props extends React.ComponentProps<typeof AvatarRoot> {
  src?: string;
  alt?: string;
  fallbackText?: string;
}
