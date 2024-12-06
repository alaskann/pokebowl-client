import React from "react";
import { cn } from "~/utils";

export function ContestantFrame({
  background,
  children,
}: {
  background: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-background rounded-md h-full aspect-auto sm:aspect-square size-36 grid place-items-center",
        background
      )}
    >
      {children}
    </div>
  );
}
