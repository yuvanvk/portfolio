import {
  NextJS,
  Postgres,
  Prisma,
  TailwindCSS,
  tRPC as TrpcIcon,
  TypeScript,
  React as ReactIcon,
  Motion as MotionIcon,
} from "@/components/ui/icons";
import type { ComponentType } from "react";

export type POWCardType = {
  title: string;
  description: string;
  deploy: string;
  github: string;
  tech: ComponentType[];
  imageUrl: string;
  status?: "Building" | "Running";
};

export const POW: POWCardType[] = [
  {
    title: "Thoughts",
    description: "Building a minimal Blogging platform.",
    deploy: "https://github.com/yuvanvk/thoughts",
    github: "https://github.com/yuvanvk/thoughts",
    tech: [
      NextJS,
      TypeScript,
      TailwindCSS,
      Prisma,
      Postgres,
      TrpcIcon,
    ],
    imageUrl: "/thoughts.png",
    status: "Building"
  },

  {
    title: "Nexus",
    description: "A Notion like app.",
    deploy: "https://nexus-two-sooty.vercel.app/",
    github: "https://github.com/yuvanvk/nexus",
    tech: [
      NextJS,
      TypeScript,
      TailwindCSS,
      Postgres,
    ],
    imageUrl: "/nexus.png",
    status: "Running"
  },
  {
    title: "Strato AI",
    description: "Multi-model AI chat in one interface.",
    deploy: "https://strarto-ai-yvk.vercel.app/chat",
    github: "https://github.com/yuvanvk/strato-ai",
    tech: [
      NextJS,
      TypeScript,
      TailwindCSS,
      Prisma,
      Postgres,
    ],
    imageUrl: "/strato.png",
    status: "Running"
  },

  {
    title: "SaaS Landing page",
    description: "Built an AI landing page, practicing animations.",
    deploy: "https://u1ai.vercel.app/",
    github: "https://github.com/yuvanvk/ai-landing",
    tech: [
      NextJS,
      TypeScript,
      TailwindCSS,
      MotionIcon,
    ],
    imageUrl: "/aiseo.png",
    status: "Running"
  },
  {
    title: "Unfold",
    description:
      "Built an unfold landing clone, to improve my animation skills",
    deploy: "https://unfold-clone.vercel.app/",
    github: "https://github.com/yuvanvk/unfold-clone",
    tech: [
      NextJS,
      TypeScript,
      TailwindCSS,
      MotionIcon,
    ],
    imageUrl: "/unfold.png",
    status: "Running"
  },
  {
    title: "Mars",
    description:
      "A cool youtube clone built for understanding how to use API's.",
    deploy: "https://mars-omega-ten.vercel.app/",
    github: "https://github.com/yuvanvk/youtube-clone",
    tech: [
      ReactIcon,
      TypeScript,
      TailwindCSS,
    ],
    imageUrl: "/MARS (1).png",
    status: "Running"
  },
];
