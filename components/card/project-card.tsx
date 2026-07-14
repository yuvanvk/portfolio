"use client";
import Image from "next/image";
import { GrainGradient } from "@paper-design/shaders-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  github: string;
  status: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  href,
  github,
  status,
}: ProjectCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex flex-col w-80 h-72 rounded-lg cursor-pointer group"
      onClick={() => router.push(href ? href : github)}
    >
      <div className="border h-45 rounded-lg relative overflow-hidden shadow-sm">
        <GrainGradient
          width={320}
          className="h-full"
          colors={["#006eff", "#174e96", "#00bfff", "#2b00ff"]}
          colorBack="#000000"
          softness={0.5}
          intensity={0.5}
          noise={0.25}
          shape="corners"
          speed={1}
        />
        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: 10 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute z-10 left-1/2 -translate-x-1/2 -bottom-13 w-72 h-53 rounded-sm overflow-hidden border-2 border-neutral-950 shadow-lg"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="288px"
            className="object-contain object-top"
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-1 px-3 py-2 flex-1">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-[16px]">{title}</h1>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                  status === "Live" ? "bg-green-500" : "bg-red-500",
                )}
              />
              <span
                className={cn(
                  "relative inline-flex h-2 w-2 rounded-full",
                  status === "Live" ? "bg-green-500" : "bg-red-500",
                )}
              />
            </span>
            <p className="text-[12.5px] text-muted-foreground">{status}</p>
          </div>
        </div>
        <p className="text-muted-foreground text-[13px] leading-4.5">
          {description}
        </p>
        <div className="flex items-center gap-1 mt-auto">
          <p className="text-[13px] text-muted-foreground group-hover:text-foreground transition-colors">
            View Project
          </p>
          <motion.svg
            variants={{
              rest: { rotate: 0 },
              hover: { rotate: 45 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground group-hover:text-foreground"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
};
