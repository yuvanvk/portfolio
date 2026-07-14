"use client";
import { motion, AnimatePresence } from "motion/react";

export const Blogs = () => {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        exit={{ filter: "blur(10px)" }}
        transition={{ duration: 0.3 }}
        className="flex flex-col mt-10"
      >
        <h1 className="font-medium text-xl mb-6">Blogs</h1>
        <p className="text-center text-sm text-muted-foreground">
          No blogs yet.
        </p>
      </motion.section>
    </AnimatePresence>
  );
};
