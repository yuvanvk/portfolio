"use client";

import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { Sun } from "../ui/sun";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="font-mono flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-0.5 rounded-full flex items-center justify-center bg-neutral-700 cursor-pointer">
            {isOpen && (<Sun />)}
            <BiChevronLeft onClick={() => setOpen(c => !c)}/>
          </div>
          <span className="text-xl">abhi vignesh</span>
        </div>

        <div className="flex items-center">
          SF
        </div>
      </div>
      <hr />
    </>
  );
};
