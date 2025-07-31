import { Card, CardContent, CardTitle } from "../ui/card";
import { ProjectCard } from "../ui/project-card";

export const CurrentProjects = () => {
  const DATA = [
    {
      id: 1,
      title: "Strato",
      description: `an app that builds fully functional websites from a single prompt. Just describe your idea, and Strato turns it into a live website instantly.`,
      href: "https://github.com/YuvanX/strato-ai"
    }
  ];

  return (
    <Card className="bg-transparent border-none shadow-none max-w-2xl px-3">
      <CardTitle className="text-sm font-satoshi font-bold">ongoing projects</CardTitle>
      <CardContent>
        {DATA &&
          DATA.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </CardContent>
    </Card>
  );
};


