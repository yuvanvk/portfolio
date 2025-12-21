"use client";

import { Container } from "@/components/wrapper/container";
import { motion } from "motion/react";

export default function AgencyPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
      className="text-4xl font-instrument-serif flex justify-center py-40">
        Launching Soon...
      </motion.div>
    </Container>
  );
}
