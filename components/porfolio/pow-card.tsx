"use client";

import { motion as m } from "motion/react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";

import { FaGithub } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { POW, POWCardType } from "@/lib/crafts";

export const POWCard = () => {
  const [current, setCurrent] = useState<POWCardType | null>(null);

  return (
    <>
      {current && (
        <m.div
          className="fixed inset-0  bg-black/10 backdrop-blur-sm z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {current && (
        <m.div
          layoutId="container"
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-xs flex flex-col border p-3 rounded-xl space-y-5 z-20 bg-[#101010]"
        >
          <m.div
            layoutId="title"
            className="w-full md:min-w-sm h-52 bg-[#EFEFF1] dark:bg-neutral-800  text-6xl flex items-center justify-center rounded-lg font-medium font-mono uppercase"
          >
            {current.title}
          </m.div>
          <div>
            <m.div className="flex items-center justify-between">
              <div className="text-xl capitalize">{current.title}</div>
              <m.div className="flex gap-x-2 items-center">
                <FaGithub />
                <IoIosGlobe />
              </m.div>
            </m.div>
            <div className="text-sm text-muted-foreground font-sans">
              {current.description}
            </div>
          </div>
          <m.div className="flex items-center gap-1">
            {["React", "Tailwind", "Typescript"].map((item) => (
              <Badge variant={"outline"}>{item}</Badge>
            ))}
          </m.div>
        </m.div>
      )}
      <m.div className="space-y-3">
        {POW.map((p, idx) => (
        <m.div
        onClick={() => setCurrent(p)}
        key={idx}
          layoutId="container"
          className="flex items-center justify-between rounded-xl w-full border px-1 py-1 font-mono"
        >
          <m.div className="flex gap-2 items-center">
            <m.div
              layoutId="title"
              className="w-16 h-16 bg-[#EFEFF1] dark:bg-neutral-800 flex items-center justify-center px-2 rounded-lg font-medium uppercase"
            >
              {p.title}
            </m.div>
            <m.div className="flex flex-col">
              <m.div className="capitalize">{p.title}</m.div>
              <m.div className="text-sm text-muted-foreground font-sans">
                {p.description}
              </m.div>
            </m.div>
          </m.div>

          <m.div className="px-2">
            <FiArrowUpRight />
          </m.div>
        </m.div>
      ))}
      </m.div>
    </>
  );
};
