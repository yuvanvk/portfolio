"use client";

import { cn } from "@/lib/utils";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "w-full md:max-w-3xl xl:max-w-3xl  mx-auto relative h-screen"
      )}
    >
      {children}
    </div>
  );
};
