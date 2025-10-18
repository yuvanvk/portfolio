"use client";

import { FiArrowUpRight } from "react-icons/fi";

export const POWCard = () => {
  return (
    <div className="flex items-center justify-between rounded-xl w-full border px-1 py-1 font-mono">
      <div className="flex gap-2 items-center">
        <div className="aspect-square bg-[#EFEFF1] dark:bg-neutral-800 flex items-center px-2 rounded-lg  font-medium">
          MARS
        </div>
        <div className="flex flex-col">
          <div>Mars</div>
          <div className="text-sm text-muted-foreground font-sans">
            A cool youtube clone
          </div>
        </div>
      </div>

      <div className="px-2">
        <FiArrowUpRight />
      </div>
    </div>
  );
};
