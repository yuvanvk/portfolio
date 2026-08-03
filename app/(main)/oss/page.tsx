"use client"
import { OSSCard } from "@/components/card/oss-card";
import { OSS } from "@/lib/oss";
import { motion, AnimatePresence } from "motion/react";
export default function OSSPage() {

    return (
        <AnimatePresence>
            <motion.section
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: "blur(0px)" }}
                exit={{ filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="scrollbar-none mt-10">
                <div className="mb-6">
                    <h2 className="font-medium text-xl">OSS Contributions</h2>
                </div>
                <div className="flex flex-col gap-3">
                    {OSS.map((oss, idx) => (
                        <OSSCard
                            PR={oss.PR}
                            href={oss.href}
                            key={idx}
                        />
                    ))}
                </div>
            </motion.section>
        </AnimatePresence>
    );
}
