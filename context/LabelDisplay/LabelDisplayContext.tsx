import { createContext, Dispatch, SetStateAction } from "react";

export type LabelDisplayType = {
    showLabels: boolean,
    setShowLabels: Dispatch<SetStateAction<boolean>>
}

export const LabelDisplayContext = createContext<LabelDisplayType>({
    showLabels: true,
    setShowLabels: () => {}
});