
import { Badge } from "./badge";
import { React } from "../ui/icons"; 
import { NextJS } from "../ui/icons";
import { TailwindCSS } from "../ui/icons";
import { TypeScript } from "../ui/icons";
import { Prisma } from "../ui/icons";
import { Postgres } from "../ui/icons";
import { AWS } from "../ui/icons";
import { Express } from "../ui/icons";
import { NodeJs } from "../ui/icons";
import { Mongo } from "../ui/icons";
import { Git } from "../ui/icons";
import { Docker } from "../ui/icons";
import { Hono } from "../ui/icons";

export const Skills = () => {
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
      icon: Git,
      title: "git",
    },
  ];
  
  return (
    <div className="mb-16">
      <div className="font-sans text-lg my-5 underline decoration-dotted tracking-tighter"></div>  
      <div className="flex flex-wrap gap-2">
        <span className="font-instrument-serif text-xl">I build using</span>
      {skills.map((s, idx) => (
        <Badge key={idx} className="my-0 mx-0">
          <s.icon />
          <div className={`${s.title === "aws" ? "uppercase" : "capitalize"} font-mono font-medium `}>{s.title}</div>
        </Badge>
      ))}
    </div>
    </div>
  );
};
