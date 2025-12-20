"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";

export const CommandToobar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleCmdKPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleCmdKPress);
    return () => {
      window.removeEventListener("keydown", handleCmdKPress);
    };
  }, []);

  return (
    <>
      <div className="flex items-center gap-x-1 p-1.5 bg-neutral-100 dark:bg-neutral-900 w-fit rounded-xl fixed bottom-4 right-4">
        <button className="cursor-pointer flex items-center justify-center size-[23px] hover:bg-neutral-200 dark:hover:bg-neutral-800 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-volume2 lucide-volume-2 size-[17px]"
            aria-hidden="true"
          >
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
            <path d="M16 9a5 5 0 0 1 0 6"></path>
            <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
          </svg>
        </button>
        <button onClick={() => setOpen(c => !c)} className="cursor-pointer flex items-center justify-center size-[23px] hover:bg-neutral-200 dark:hover:bg-neutral-800 p-1 rounded-full active:scale-120 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cog text-foreground size-[17px]"
            aria-hidden="true"
          >
            <path d="M11 10.27 7 3.34"></path>
            <path d="m11 13.73-4 6.93"></path>
            <path d="M12 22v-2"></path>
            <path d="M12 2v2"></path>
            <path d="M14 12h8"></path>
            <path d="m17 20.66-1-1.73"></path>
            <path d="m17 3.34-1 1.73"></path>
            <path d="M2 12h2"></path>
            <path d="m20.66 17-1.73-1"></path>
            <path d="m20.66 7-1.73 1"></path>
            <path d="m3.34 17 1.73-1"></path>
            <path d="m3.34 7 1.73 1"></path>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="12" cy="12" r="8"></circle>
          </svg>
        </button>
      </div>
      <Setting open={open} setOpen={setOpen} />
    </>
  );
};


export const Setting = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: false) => void;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const {resolvedTheme, setTheme} = useTheme();

  const playAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/tap_05.wav");
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(0px)"}}
              animate={{ opacity: 1 ,filter: "blur(10px)" }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed backdrop-blur-[10px] inset-0 z-20"
            />
            <motion.div
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{
                y: 500,
              }}
              className="fixed w-[360px] sm:min-w-sm px-2 py-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 bottom-4 z-30 left-1/2 -translate-x-1/2 flex flex-col gap-y-2"
            >
              <div
                onMouseEnter={playAudio}
                className="flex items-center gap-x-2 px-3 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
              >
                <div className="uppercase font-instrument-serif">
                  show labels
                </div>
                <div className="flex-1 w-full h-px bg-gray-300  dark:bg-neutral-600" />
                <div className="font-sans tracking-tighter text-sm text-neutral-400 dark:text-neutral-500">
                  true
                </div>
              </div>
              <div
                onClick={() => {
                  setTheme(resolvedTheme === "light" ? "dark": "light")
                  
                }}
                onMouseEnter={playAudio}
                className="flex items-center gap-x-2 px-3 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
              >
                <div className="uppercase font-instrument-serif">THEME</div>
                <div className="flex-1 w-full h-px bg-gray-300  dark:bg-neutral-600" />
                <div className="font-sans tracking-tighter text-sm  text-neutral-400 dark:text-neutral-500">
                  {resolvedTheme}
                </div>
              </div>
              <div
                onMouseEnter={playAudio}
                className="flex items-center gap-x-2 px-3 py-1 hover:bg-white dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
              >
                <div className="uppercase font-instrument-serif">
                  SYSTEM THEME
                </div>
                <div className="flex-1 w-full h-px bg-gray-300  dark:bg-neutral-600" />
                <div className="font-sans tracking-tighter text-sm text-neutral-400 dark:text-neutral-500">
                  off
                </div>
              </div>

              <div
                onMouseEnter={playAudio}
                className="flex items-center gap-x-2 px-3 py-1 hover:bg-white  dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
              >
                <div className="uppercase font-instrument-serif">SOUND</div>
                <div className="flex-1 w-full h-px bg-gray-300  dark:bg-neutral-600" />
                <div className="font-sans tracking-tighter text-sm text-neutral-400 dark:text-neutral-500">
                  enabled
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
