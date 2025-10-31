
import { Badge } from "./badge";
import { React } from "../svgs/react";
import { NextJS } from "../svgs/nextjs";
import { TailwindCSS } from "../svgs/tailwindcss";
import { TypeScript } from "../svgs/typesscript";
import { Prisma } from "../svgs/prisma";
import { Postgres } from "../svgs/postgres";
import { AWS } from "../svgs/aws";
import { Express } from "../svgs/express";
import { NodeJs } from "../svgs/nodejs";
import { Mongo } from "../svgs/mongo";
import { Git } from "../svgs/git";
import { Docker } from "../svgs/docker";
import { Hono } from "../svgs/hono";

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
      <div className="font-instrument-serif text-xl my-5">Technologies known</div>  
      <div className=" flex flex-wrap gap-2">
      {skills.map((s, idx) => (
        <Badge key={idx} className="my-0 mx-0">
          <s.icon />
          <div className={`${s.title === "aws" ? "uppercase" : "capitalize"} font-brico `}>{s.title}</div>
        </Badge>
      ))}
    </div>
    </div>
  );
};
