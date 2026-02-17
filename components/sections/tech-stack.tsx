import { Badge } from "../ui/badge";
import {
  AWS,
  Docker,
  Express,
  Git,
  Hono,
  Kubernetes,
  Mongo,
  NextJS,
  NodeJs,
  Postgres,
  Prisma,
  React,
  Redis,
  TailwindCSS,
  TanStack,
  tRPC,
  TypeScript,
} from "@/components/ui/icons";

const skills = [
  {
    icon: React,
    title: "react",
  },
  {
    icon: NextJS,
    title: "next.js",
  },
  {
    icon: TailwindCSS,
    title: "tailwindcss",
  },
  {
    icon: TypeScript,
    title: "typescript",
  },
  {
    icon: Express,
    title: "express",
  },
  {
    icon: NodeJs,
    title: "nodejs",
  },
  {
    icon: Hono,
    title: "hono",
  },
  {
    icon: Mongo,
    title: "mongodb",
  },
  {
    icon: Postgres,
    title: "postgres",
  },
  {
    icon: Prisma,
    title: "prisma",
  },
  {
    icon: AWS,
    title: "aws",
  },
  {
    icon: Docker,
    title: "docker",
  },
  {
    icon: TanStack,
    title: "tanstack query",
  },
  {
    icon: tRPC,
    title: "TRPC",
  },
  {
    icon: Git,
    title: "git",
  },
  {
    icon: Kubernetes,
    title: "Kubernetes",
  },
  {
    icon: Redis,
    title: "redis",
  },
];

export const TechStack = () => {
  return (
    <div className="flex flex-col my-10 space-y-3 px-4 md:px-0">
      <span className="font-instrument-serif text-2xl">Tech Stack</span>
      <div className="flex flex-wrap gap-2">
        {skills.map((s, idx) => (
          <Badge key={idx} className="my-0 mx-0">
            <s.icon />
            <div
              className={`${s.title === "aws" ? "uppercase" : "capitalize"} font-mono font-medium `}
            >
              {s.title}
            </div>
          </Badge>
        ))}
      </div>
    </div>
  );
};
