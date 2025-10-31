"use client";

import {  motion as m } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge"; 
import { FaGithub } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { POW, POWCardType } from "@/lib/crafts";
import { Skeleton } from "../ui/skeleton";

export const POWCard = () => {
  const [current, setCurrent] = useState<POWCardType | null>(null);
  const currentRef = useRef<HTMLDivElement | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (currentRef.current && !currentRef.current.contains(e.target as Node)) {
        setCurrent(null);
      }
    }

    if (current) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [current]);

  return (
    <>
 
      {current && (
        <m.div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {current && (
        <m.div
          ref={currentRef}
          layoutId={`card-${current.title}`}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     min-w-[340px] md:min-w-sm flex flex-col border p-3 rounded-xl 
                     space-y-5 z-20 bg-[#FFFFFF] dark:bg-[#101010]"
        >
         

          <m.img layoutId={`image-${current.title}`} src={current.imageUrl} className="w-full md:min-w-sm h-52 rounded-lg object-cover"/>

          <div>
            <m.div layoutId={`header-${current.title}`} className="flex items-center justify-between">
              <div className="text-xl capitalize">{current.title}</div>
              <m.div className="flex gap-x-3 items-center">
                <a target="_blank" href={current.github}>
                  <FaGithub className="cursor-pointer" />
                </a>
                <a target="_blank" href={current.deploy}>
                  <IoIosGlobe className="cursor-pointer" />
                </a>
              </m.div>
            </m.div>
            <m.div
              layoutId={`desc-${current.title}`}
              className="text-xs md:text-sm text-muted-foreground font-sans"
            >
              {current.description}
            </m.div>
          </div>

          <m.div className="flex flex-wrap items-center gap-1.5">
            {current.tech.map((item, idx) => (
              <Badge key={idx} variant={"outline"}>
                {item}
              </Badge>
            ))}
          </m.div>
        </m.div>
      )}
      <m.div className="space-y-3 cursor-pointer">
        {POW.map((p, idx) => (
          <m.div
            onClick={() => setCurrent(p)}
            key={idx}
            layoutId={`card-${p.title}`}
            className="flex items-center justify-between rounded-xl w-full border px-1 py-1 font-mono"
          >
            <m.div className="flex gap-2 items-center">

              {loading ? <Skeleton className="max-w-28 max-h-28 rounded-lg w-full h-full" /> : <m.img layoutId={`image-${p.title}`} src={p.imageUrl} className="max-w-28 max-h-16 rounded-lg"/>}
              <m.div className="flex flex-col">
                <m.div layoutId={`header-${p.title}`} className="capitalize font-brico">
                  {p.title}
                </m.div>
                <m.div
                  layoutId={`desc-${p.title}`}
                  className="text-sm text-muted-foreground font-brico line-clamp-1"
                >
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
