"use client";
import { motion, AnimatePresence } from "motion/react";
export const About = () => {
  return (
    <AnimatePresence>
      <motion.p
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        exit={{ filter: "blur(10px)" }}
        transition={{ duration: 0.3 }}
        className="mt-10"
      >
        <span className="text-muted-foreground">Want to know about me </span>-
        I'm Abhi from{" "}
        <span className="font-medium text-blue-400">Telangana, India</span>. I
        started to learn code from my mid sophomore year. Currently building my
        first product <span className="font-medium text-blue-400">Yuvly</span>.{" "}
        <span className="text-muted-foreground">
          (that's it for now, maybe after completing building Yuvly i would
          update this page.)
        </span>
      </motion.p>
    </AnimatePresence>
  );
};
