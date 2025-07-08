import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const Skills = () => {
  const SKILLS = [
    "react",
    "nextjs",
    "tailwind",
    "gsap",
    "motion",
    "typescript",
    "express",
    "nodejs",
    "hono",
    "mongodb",
    "postgres",
    "prisma",
    "aws",
    "docker",
  ];
  return (
    <Card className="font-satoshi max-w-2xl bg-transparent border-none">
      <CardHeader>
        <CardTitle className="text-center text-sm font-bold">skills</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-3 justify-center text-xs flex-wrap">
        {SKILLS.map((s, idx) => (
          <div className="px-4 py-2 border rounded-lg hover:bg-neutral-900 transition duration-300">{s}</div>
        ))}
      </CardContent>
    </Card>
  );
};
