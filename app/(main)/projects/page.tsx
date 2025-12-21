"use client";

import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/wrapper/container";
import { POW } from "@/lib/projects";
import { useRef } from "react";

import { motion } from "motion/react";

export default function ProjectsPage() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const playSound = () => {
        if(!audioRef.current) {
            audioRef.current = new Audio("/audio/tap_05.wav")
        }

        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }
        return <Container>
            <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="pt-20">
               <div className="flex items-center gap-x-2 max-w-sm md:max-w-lg mx-auto">
                    <div className="text-center font-instrument-serif text-5xl">Projects</div>
                    <div className="h-px bg-neutral-300 dark:bg-neutral-700 flex-1"/>
                    <div className="text-5xl text-neutral-800 dark:text-neutral-300 font-instrument-serif">{POW.length}</div>
                </div> 

                <div className="flex flex-col gap-y-2 pt-28 pb-5">
                    {POW.map((p) => (
                        <ProjectCard key={p.github} name={p.title} description={p.description} time={p.year} link={p.deploy} playSound={playSound}/>
                    ))}
                </div>
            </motion.div>
        </Container>
}