"use client";

import { cn } from "@/lib/utils";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "w-full px-2 md:max-w-3xl xl:max-w-3xl  mx-auto relative py-20"
      )}
    >
      {children}
    </div>
  );
};
