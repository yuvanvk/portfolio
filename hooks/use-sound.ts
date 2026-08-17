"use client";

import { useSound as useSoundContext } from "@/components/sound-provider";

export function useTapSound(src: string) {
  const { play } = useSoundContext();
  return () => play(src);
}
