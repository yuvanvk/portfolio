export type POWCardType = {
    title: string,
    description: string,
    deploy: string,
    github: string,
    tech: string[]
}

export const POW: POWCardType[] = [
    {
        title: "Mars",
        description: "A cool youtube clone built for understanding how to use API's.",
        deploy: "https://mars-omega-ten.vercel.app/",
        github: "https://github.com/yuvanvk/youtube-clone",
        tech: ["React", "Typescript", "Tailwind CSS"]
    },
    {
        title: "Nexus",
        description: "Built an Notion like app.",
        deploy: "https://nexus-two-sooty.vercel.app/",
        github: "https://github.com/yuvanvk/nexus",
         tech: ["Nextjs", "Typescript", "Tailwind CSS", "Drizzle ORM", "Postgres"]
    },
    {
        title: "Strato",
        description: "Building an All-in-one AI chat app.",
        deploy: "https://nexus-two-sooty.vercel.app/",
        github: "https://github.com/yuvanvk/nexus",
         tech: ["Nextjs", "Typescript", "Tailwind CSS", "Prisma ORM", "Postgres"]
    },
    {
        title: "Thoughts",
        description: "Building a Blogging platform.",
        deploy: "https://nexus-two-sooty.vercel.app/",
        github: "https://github.com/yuvanvk/nexus",
         tech: ["Nextjs", "Typescript", "Tailwind CSS", "Prisma", "Postgres", "Turborepo", "trpc"]
    },
    {
        title: "AISEO",
        description: "Built an AI landing page, practicing animations.",
        deploy: "https://u1ai.vercel.app/",
        github: "https://github.com/yuvanvk/ai-landing",
         tech: ["Nextjs", "Typescript", "Tailwind CSS", "Motion"]
    },
    {
        title: "Gojo",
        description: "Built an unfold landing clone, to improve my animation skills",
        deploy: "https://unfold-clone.vercel.app/",
        github: "https://github.com/yuvanvk/unfold-clone",
         tech: ["Nextjs", "Typescript", "Tailwind CSS", "Motion"]
    },
]