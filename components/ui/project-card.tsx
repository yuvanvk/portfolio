import { TextArrow } from "./text-arrow";

export function ProjectCard({ project }: any) {
  return (
    <div className="flex flex-col text-sm m-4">
      <TextArrow href={project.href} text={project.title} />
      <div className="text-muted-foreground font-satoshi font-normal">
        {project.description.toLowerCase()}
      </div>
    </div>
  );
}