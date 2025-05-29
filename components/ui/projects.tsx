import { Card, CardContent, CardTitle } from "./card";
import { ProjectCard } from "./project-card";


export const Projects = () => {
  const DATA = [
    {
      title: "mars",
      description: "an app that builds fully functional websites from a single prompt. Just describe your idea, and Strato turns it into a live website instantly."
    },
    {
      title: "thoughts",
      description: "a blogging platform where users can read blogs, write their own, and become writers to publish blogs that others can read. It provides a simple, clean interface to express ideas and share thoughts with the world."
    },
    {
        title: "dukaan",
        description: "A clean and responsive UI clone of the Dukaan website, recreated with attention to layout, design, and user experience."
    }
  ];


  return (
    <Card className="bg-transparent border-none shadow-none max-w-2xl">
      <CardTitle className="text-sm text-center">projects</CardTitle>
      <CardContent>
        {DATA &&
          DATA.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </CardContent>
    </Card>
  );
};
