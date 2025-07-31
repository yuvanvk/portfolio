import { Card, CardContent, CardTitle } from "../ui/card";
import { ProjectCard } from "../ui/project-card";

export const CurrentProjects = () => {
  const DATA = [
    {
      id: 1,
      title: "nexttoyou",
      description: `A location-based app that helps users effortlessly discover nearby hostels and PG accommodations—saving them valuable time and reducing the hassle of manual searches.`,
      href: "https://github.com/YuvanX/nexttoyou"
    },{
      id: 2,
      title: "upvote",
      description: `A community-driven platform where users can upvote real-world problems, issues, and innovative ideas—empowering others to identify key pain points and collaborate on impactful solutions.`,
      href: "#"
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


