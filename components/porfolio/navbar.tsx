"use client";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { motion as m } from "motion/react";
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
          <m.div
            className={`${
              isOpen ? "w-16 justify-between" : "w-5 justify-center"
            } h-5 rounded-full flex items-center  bg-[#EFEFF1] dark:bg-zinc-800 cursor-pointer px-1 transition-all duration-300`}
          >
            {isOpen && (
              <m.div initial={{x: 10}} animate={{x: 0}} transition={{ duration: 0.3}}>
                {theme === "light" ? (
                  <div onClick={() => setTheme("dark")}>
                    <Moon />
                  </div>
                ) : (
                  <div onClick={() => setTheme("light")}>
                    <Sun />
                  </div>
                )}
              </m.div>
            )}
            <m.div whileTap={{ rotate: 360 }}  transition={{ ease: 'easeOut', duration: 0.5 }} onClick={() => setOpen((c) => !c)}>
              {isOpen && <BiChevronRight />}
              {!isOpen && <BiChevronLeft />}
            </m.div>
          </m.div>

          <span className="text-lg font-medium font-sans">abhi vignesh</span>
        </div>

        <div className="flex items-center font-sans">IN</div>
      </div>
      <hr />
    </>
  );
};
