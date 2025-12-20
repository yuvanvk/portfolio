export type POWCardType = {
  title: string;
  description: string;
  deploy: string;
  github: string;
  tech: string[];
  imageUrl: string;
  year: string;
};

export const POW: POWCardType[] = [
  {
    title: "Thoughts",
    description: "Building a minimal Blogging platform.",
    deploy: "https://github.com/yuvanvk/thoughts",
    github: "https://github.com/yuvanvk/thoughts",
    tech: [
      "Nextjs",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "Postgres",
      "Turborepo",
      "trpc",
    ],
    imageUrl: "/thoughts.png",
    year: "Current",
  },

  {
    title: "Nexus",
    description: "Built an Notion like app.",
    deploy: "https://nexus-two-sooty.vercel.app/",
    github: "https://github.com/yuvanvk/nexus",
    tech: ["Nextjs", "Typescript", "Tailwind CSS", "Drizzle ORM", "Postgres"],
    imageUrl: "/nexus.png",
    year: "2025",
  },
  {
    title: "Strato AI",
    description: "Building an All-in-one AI chat app.",
    deploy: "https://strarto-ai-yvk.vercel.app/chat",
    github: "https://github.com/yuvanvk/strato-ai",
    tech: ["Nextjs", "Typescript", "Tailwind CSS", "Prisma ORM", "Postgres"],
    imageUrl: "/strato.png",
    year: "2025",
  },

  {
    title: "SaaS Landing page",
    description: "Built an AI landing page, practicing animations.",
    deploy: "https://u1ai.vercel.app/",
    github: "https://github.com/yuvanvk/ai-landing",
    tech: ["Nextjs", "Typescript", "Tailwind CSS", "Motion"],
    imageUrl: "/aiseo.png",
    year: "2025",
  },
  {
    title: "Unfold",
    description:
      "Built an unfold landing clone, to improve my animation skills",
    deploy: "https://unfold-clone.vercel.app/",
    github: "https://github.com/yuvanvk/unfold-clone",
    tech: ["Nextjs", "Typescript", "Tailwind CSS", "Motion"],
    imageUrl: "/unfold.png",
    year: "2025",
  },
  {
    title: "Mars",
    description:
      "A cool youtube clone built for understanding how to use API's.",
    deploy: "https://mars-omega-ten.vercel.app/",
    github: "https://github.com/yuvanvk/youtube-clone",
    tech: ["React", "Typescript", "Tailwind CSS"],
    imageUrl: "/MARS (1).png",
    year: "2024",
  },
];
