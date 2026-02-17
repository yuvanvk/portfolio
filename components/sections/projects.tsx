"use client";

import { POW } from "@/lib/projects";
import { ProjectCard } from "../cards/project-card";
import { useContext } from "react";
import { SoundContext } from "@/context/Sound/SoundContext";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const Projects = () => {
  const { playSound } = useContext(SoundContext);
  const router = useRouter();

  const projects = POW.filter((x, idx) => idx <= POW.length / 2);

  return (
    <div className="flex flex-col gap-y-3 my-10 w-full">
      <div className="flex items-center justify-between">
        <span className="font-instrument-serif text-2xl">Projects</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard
            playSound={() => playSound("/audio/tap_05.wav")}
            project={p}
            key={idx}
          />
        ))}
      </div>
      <div onClick={() => router.push("/projects")} className={cn("border w-fit mx-auto p-1 rounded-xl border-neutral-200 dark:border-neutral-800 my-6")}>
        <button
          className={cn(
            "flex items-center gap-x-1 border border-neutral-200 dark:border-neutral-800",
            "px-2 py-1 rounded-[9px]",
            "font-sans font-medium",
            "cursor-pointer"
          )}
        >
          View All
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
};
