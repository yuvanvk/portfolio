"use client";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import * as m from "motion/react";
import { useTheme } from "next-themes";

import { Moon } from "@/components/ui/moon";
import { Sun } from "@/components/ui/sun";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`${
              isOpen ? "w-16 justify-between" : "w-5 justify-center"
            } h-5 rounded-full flex items-center  bg-[#EFEFF1] dark:bg-zinc-800 cursor-pointer px-1`}
          >
            {isOpen && (
              <div>
                {theme === "light" ? (
                  <div onClick={() => setTheme("dark")}>
                    <Moon />
                  </div>
                ) : (
                  <div onClick={() => setTheme("light")}>
                    <Sun />
                  </div>
                )}
              </div>
            )}
            <div onClick={() => setOpen((c) => !c)}>
              {isOpen && <BiChevronRight />}
              {!isOpen && <BiChevronLeft />}
            </div>
          </div>

          <span className="text-lg font-sans">abhi vignesh</span>
        </div>

        <div className="flex items-center font-sans">SF</div>
      </div>
      <hr />
    </>
  );
};
