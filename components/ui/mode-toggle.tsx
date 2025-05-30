"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./moon";
import { SunIcon } from "./sun";
import { PlayAudio } from "./audio";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div onClick={() => {
      PlayAudio()
      setTheme(theme === "light" ? "dark" : "light")
      }}>
      {theme === "light" ? <MoonIcon size={18}  /> : <SunIcon size={18}/>}
    </div>
  );
};
