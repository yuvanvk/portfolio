"use client";

import { GithubGraph } from "@/components/card/github-graph";
import { ProjectCard } from "@/components/card/project-card";
import { Button } from "@/components/ui/button";
import { Projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        exit={{ filter: "blur(10px)" }}
        transition={{ duration: 0.3 }}
        className={cn("flex flex-col py-10 gap-15 text-[15px] leading-6")}
      >
        <main>
          <p>
            Hi, I'm Abhi Vignesh{" "}
            <span className="text-muted-foreground">aka Yuvan</span>. Learned to
            code, and now building things that I like.
          </p>
          <p>
            In terms of career perspective I'm a Full Stack Developer with good
            taste in design{" "}
            <span className="text-muted-foreground">
              (not much but yeah decent)
            </span>{" "}
            and building scalable backends.{" "}
            <span className="text-muted-foreground">
              (learning and building am not a perfectionist tho).
            </span>{" "}
          </p>
          <br />
          <p>Currently tingering around Agentic Engineering.</p>
        </main>
        <section>
          <GithubGraph />
        </section>

        <section className="scrollbar-none">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-medium text-xl">Projects</h2>
            <Button
              size={"xs"}
              variant={"outline"}
              onClick={() => router.push("/projects")}
              className={cn(
                "bg-linear-to-b to-blue-700 from-blue-400 border-blue-500! cursor-pointer text-neutral-100 hover:text-neutral-100 hover:opacity-90",
              )}
            >
              View all
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {Projects.map((project, idx) => (
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
        </section>

        <section>
          <h2 className="font-medium text-xl mb-6">Skills</h2>
          <p className="font-medium">
            <span className="text-muted-foreground font-normal">
              Tech stack I use -{" "}
            </span>
            React, TailwindCSS, shadcn/ui, Nextjs, Tanstack Start, Cloudflare,
            Drizzle, Prisma, PostgreSQL, Docker, k8s, AWS.
          </p>
        </section>

        <section className="mx-auto">
          <p className="mt-10 text-sm text-muted-foreground">
            © 2026 Abhi Vignesh. All rights reserved.
          </p>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
