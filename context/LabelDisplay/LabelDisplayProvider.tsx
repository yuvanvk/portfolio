"use client";

import { LabelDisplayContext } from "@/context/LabelDisplay/LabelDisplayContext";
import { useState } from "react";

export const LabelDisplayProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showLabels, setShowLabels] = useState(true);

  return (
    <LabelDisplayContext.Provider value={{ showLabels, setShowLabels }}>
      {children}
    </LabelDisplayContext.Provider>
  );
};
