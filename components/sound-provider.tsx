"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  play: (src: string) => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sound-muted");
    if (stored !== null) setIsMuted(stored === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("sound-muted", String(isMuted));
  }, [isMuted]);

  const toggleMute = useCallback(() => setIsMuted((prev) => !prev), []);

  const play = useCallback(
    (src: string) => {
      if (isMuted) return;
      const audio = new Audio(src);
      audio.play().catch(() => {});
    },
    [isMuted],
  );

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, play }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}
