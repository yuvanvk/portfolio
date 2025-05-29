import { Card, CardContent, CardTitle } from "./card";
import { ProjectCard } from "./project-card";

export const CurrentProjects = () => {
  const DATA = [
    {
      title: "Strato",
      description: `an app that builds fully functional websites from a single prompt. Just describe your idea, and Strato turns it into a live website instantly.`,
    },
  ];

  return (
    <Card className="bg-transparent border-none shadow-none max-w-2xl">
      <CardTitle className="text-sm text-center">ongoing projects</CardTitle>
      <CardContent>
        {DATA &&
          DATA.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </CardContent>
    </Card>
  );
};


