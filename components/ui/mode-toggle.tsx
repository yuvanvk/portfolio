"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <RiMoonFill /> : <RiSunFill />}
    </div>
  );
};
