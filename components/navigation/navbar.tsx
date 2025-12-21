"use client";

import { LabelDisplayContext } from "@/context/LabelDisplay/LabelDisplayContext";
import { SoundContext } from "@/context/Sound/SoundContext";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export const Navbar = () => {

  const [time, setTime] = useState("");
  const { showLabels } = useContext(LabelDisplayContext);
  const { playSound } = useContext(SoundContext);

  const pathName = usePathname();
  const router = useRouter();
  
  const pages = [
    {
      id: 1,
      name: "home",
      character: "H",
      route: "/",
    },
    {
      id: 2,
      name: "about",
      character: "A",
      route: "/about",
    },
    {
      id: 3,
      name: "projects",
      character: "P",
      route: "/projects",
    },
    {
      id: "4",
      name: "contact",
      character: "C",
      route: "/contact",
    },
    {
      id: 5,
      name: "agency",
      character: "Y",
      route: "/agency",
    },
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      
      switch (e.key) {
        case "h":
          router.push("/")
          break
        case "a":
          router.push("/about")
          break
        case "p":
          router.push("/projects")
          break
        case "c":
          router.push("/contact")
          break
        case "y":
          router.push("/agency")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  useEffect(() => {
      const clock = () => {
        const time = new Date();

        const hours = time.getHours().toString().padStart(2, "0");
        const minutes = time.getMinutes().toString().padStart(2, "0")


        setTime(`${hours}:${minutes}`)
      } 
      clock()
      const interval = setInterval(clock, 1000);

      return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed w-full z-10 top-8">
      <div className="flex items-center justify-center gap-x-2 xl:gap-x-4 tracking-tighter w-full md:max-w-xl xl:max-w-3xl mx-auto">
        {pages.map((p) => (
          <div
          onClick={() => router.push(p.route)}
            key={p.id}
            onMouseEnter={() => playSound("/audio/tap_01.wav")}
            className={cn(
              `flex items-center gap-x-1`,
              "hover:bg-neutral-100 dark:hover:bg-[#0E0E0E] p-2 rounded-lg cursor-pointer group"
            )}
          >
            <span
              className={cn(
                `${p.route === pathName ? "text-neutral-800 dark:text-white" : "text-neutral-400 dark:text-neutral-700 group-hover:text-neutral-500"}`,
                "text-sm capitalize"
              )}
            >
              {p.name}
            </span>
            {showLabels && (<span
              className={cn(
                `border ${p.route === pathName
                  ? "border-neutral-900 dark:border-white"
                  : "border-neutral-400 text-neutral-400 dark:border-neutral-700 dark:text-neutral-700 group-hover:text-neutral-500 group-hover:border-neutral-500"
                }`,
                "size-4 hidden  items-center justify-center px-1 text-xs md:flex rounded-sm uppercase"
              )}
            >
              {p.character}
            </span>)}
          </div>
        ))}

        <div className="hidden rounded-full md:flex items-center justify-between gap-x-2 tracking-tighter text-xs font-mono text-white bg-neutral-900 border px-3 py-1">
          <div className="size-2 bg-lime-500 rounded-full animate-pulse" />
          <div>{time}</div>
          <div>GMT+5: 30</div>
        </div>
      </div>
    </div>
  );
};
