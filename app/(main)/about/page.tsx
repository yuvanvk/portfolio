"use client";

import { Container } from "@/components/ui/container";
import { motion } from "motion/react"
export default function AboutPage() {
  return (
    <Container>
      <div className="fixed  top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 font-instrument-serif text-2xl md:text-3xl text-start md:text-center px-2">
        <motion.p initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
        >
          I’m a final-year student exploring{" "}
          <span className="underline text-indigo-500">
            Full stack development
          </span>{" "}
          by building projects and learning in public. Lately, I’ve been focused
          on improving my development skills, experimenting with new ideas, and
          turning concepts into real products through consistent practice and
          hands-on work.
        </motion.p>
      </div>
    </Container>
  );
}
