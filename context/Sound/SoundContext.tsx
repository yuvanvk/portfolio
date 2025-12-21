import { createContext } from "react";

export type SoundContextType = {
    enabled: boolean,
    toggleSound: () => void,
    playSound: (src: string) => void
}

export const SoundContext = createContext<SoundContextType>({
    enabled: true,
    toggleSound: () => {},
    playSound: () => {}
})