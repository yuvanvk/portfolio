import { TextArrow } from "./text-arrow";

export function ProjectCard({ project }: any) {
  return (
    <div className="flex flex-col text-sm m-4">
      <TextArrow text={project.title} />
      <div className="text-muted-foreground">
        {project.description.toLowerCase()}
      </div>
    </div>
  );
}