"use client";

import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/wrapper/container";
import { POW } from "@/lib/projects";
import { useContext } from "react";

import { motion } from "motion/react";
import { SoundContext } from "@/context/Sound/SoundContext";
import { HomeButton } from "@/components/ui/home-button";

export default function ProjectsPage() {
  const { playSound } = useContext(SoundContext);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
        className="pt-20 pb-16 px-4 md:px-0"
      >
        <HomeButton />
        <div className="flex items-center gap-x-2 max-w-sm md:max-w-lg mx-auto">
          <div className="text-center font-instrument-serif text-5xl">
            All Projects
          </div>
          <div className="h-px bg-neutral-300 dark:bg-neutral-700 flex-1" />
          <div className="text-5xl text-neutral-800 dark:text-neutral-300 font-instrument-serif">
            {POW.length}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-28 pb-5">
          {POW.map((p) => (
            <ProjectCard
              key={p.title}
              project={p}
              playSound={() => playSound("/audio/tap_05.wav")}
            />
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
