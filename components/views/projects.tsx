"use client"
import { ProjectCard } from "@/components/card/project-card";
import { Projects as projects } from "@/lib/projects";
import { motion, AnimatePresence } from "motion/react";
export default function Projects() {

    return (
        <AnimatePresence>
            <motion.section
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: "blur(0px)" }}
                exit={{ filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="scrollbar-none mt-10">
                <div className="mb-6">
                    <h2 className="font-medium text-xl">Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            href={project.href}
                            github={project.github}
                            status={project.status}
                            key={idx}
                        />
                    ))}
                </div>
            </motion.section>
        </AnimatePresence>
    );
}
