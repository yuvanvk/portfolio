"use client";

import { Header } from "@/components/sections/header";
import { About } from "@/components/sections/about";
import { MusicPlayer } from "@/components/sections/music-player";
import { Container } from "@/components/wrapper/container";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { motion } from "motion/react";

export default function Home() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
        className="pb-16"
      >
        <Header />
        <About />
        <Projects />
        <TechStack />
        <div className="px-3 w-full md:px-0">
          <MusicPlayer />
        </div>
      </motion.div>
    </Container>
  );
}
