"use client";

import { useEffect } from "react";

export const CommandToobar = () => {

  useEffect(() => {
    const handleCmdKPress = (e: KeyboardEvent) => {
      if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        alert("dfjdfjdjfodjfoj")
      }
    }
    window.addEventListener("keydown", handleCmdKPress)
    return () => window.removeEventListener("keydown", handleCmdKPress)
  }, [])
  return (

    <div className="flex items-center gap-x-2 px-2 py-2 bg-neutral-900 w-fit rounded-xl fixed bottom-5 right-5">
      <button className="cursor-pointer flex items-center justify-center size-[17px]">
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
      <button className="cursor-pointer flex items-center justify-center size-[17px]">
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
  );
};
