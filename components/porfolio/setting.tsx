"use client";

import { useRef } from "react";

export const Setting = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/tap_05.wav");
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div>
      <div className="fixed backdrop-blur-sm inset-0 z-20" />
      <div className="fixed min-w-sm px-2 py-3 rounded-2xl bg-neutral-900 bottom-4 z-20 left-1/2 -translate-x-1/2 flex flex-col gap-y-2">
        <div
          onMouseEnter={playAudio}
          className="flex items-center gap-x-2 px-3 py-1 hover:bg-neutral-800 rounded-lg cursor-pointer"
        >
          <div className="uppercase font-instrument-serif">show labels</div>
          <div className="flex-1 w-full h-px bg-neutral-600" />
          <div className="font-sans tracking-tighter text-sm text-neutral-500">
            true
          </div>
        </div>
        <div
          onMouseEnter={playAudio}
          className="flex items-center gap-x-2 px-3 py-1 hover:bg-neutral-800 rounded-lg cursor-pointer"
        >
          <div className="uppercase font-instrument-serif">THEME</div>
          <div className="flex-1 w-full h-px bg-neutral-600" />
          <div className="font-sans tracking-tighter text-sm text-neutral-500">
            dark
          </div>
        </div>
        <div
          onMouseEnter={playAudio}
          className="flex items-center gap-x-2 px-3 py-1 hover:bg-neutral-800 rounded-lg cursor-pointer"
        >
          <div className="uppercase font-instrument-serif">SYSTEM THEME</div>
          <div className="flex-1 w-full h-px bg-neutral-600" />
          <div className="font-sans tracking-tighter text-sm text-neutral-500">
            off
          </div>
        </div>

        <div
          onMouseEnter={playAudio}
          className="flex items-center gap-x-2 px-3 py-1 hover:bg-neutral-800 rounded-lg cursor-pointer"
        >
          <div className="uppercase font-instrument-serif">SOUND</div>
          <div className="flex-1 w-full h-px bg-neutral-600" />
          <div className="font-sans tracking-tighter text-sm text-neutral-500">
            enabled
          </div>
        </div>
      </div>
    </div>
  );
};
