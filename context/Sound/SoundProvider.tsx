"use client";

import { useRef, useState } from "react";
import { SoundContext } from "./SoundContext";

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
    const [enabled, setEnabled] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);


    const toggleSound = () => setEnabled(p => !p)

    const playSound = (src: string) => {
        if(!enabled) return;

        if(!audioRef.current) {
            audioRef.current = new Audio(src);
        } else {
            audioRef.current.src = src
        }

        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }

    return <SoundContext.Provider value={{ enabled, toggleSound, playSound }}>
        {children}
    </SoundContext.Provider>
}