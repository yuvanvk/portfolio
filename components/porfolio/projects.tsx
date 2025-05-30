import { Card, CardContent, CardTitle } from "../ui/card";
import { ProjectCard } from "../ui/project-card";


export const Projects = () => {
  const DATA = [
    {
      id: 1,
      title: "mars",
      description: "a cool YouTube clone with a clean, modern UI and smooth user experience. It brings the core feel of YouTube with a fresh, minimal design twist",
      href: "https://mars-omega-ten.vercel.app/"
    },
    {
      id: 2,
      title: "thoughts",
      description: "a blogging platform where users can read blogs, write their own, and become writers to publish blogs that others can read. It provides a simple, clean interface to express ideas and share thoughts with the world.",
      href: "https://thoughts-red-omega.vercel.app/home"
    },
    {   
        id: 3,
        title: "dukaan",
        description: "A clean and responsive UI clone of the Dukaan website, recreated with attention to layout, design, and user experience.",
        href: "https://dukaan-app-ui-iota.vercel.app/"
    }
  ];


  return (
    <Card className="bg-transparent border-none shadow-none max-w-2xl">
      <CardTitle className="text-sm text-center font-satoshi font-bold">projects</CardTitle>
      <CardContent>
        {DATA &&
          DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </CardContent>
    </Card>
  );
};
