import Image from "next/image";
import { POWCardType } from "@/lib/projects";
import { GitHub } from "../ui/icons";
import { Globe2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
export const ProjectCard = ({
  project,
  playSound,
}: {
  project: POWCardType;
  playSound?: () => void;
}) => {
  return (
    <div
      onMouseEnter={playSound}
      className="w-full flex flex-col rounded-[10px] overflow-hidden border min-h-96"
    >
      <div className="w-full h-52 relative">
        <Image src={"/images/si.jpeg"} alt="project-image" fill />
      </div>

      <div className="p-6 gap-y-3 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between">
          <div className="font-sans font-medium capitalize">
            {project.title}
          </div>
          <div className="flex items-center gap-x-2.5">
            <a href={project.github} target="_blank">
              <GitHub width={20} />
            </a>
            {project.status !== "Building" && (
              <a href={project.deploy} target="_blank">
                <Globe2Icon size={20} />
              </a>
            )}
          </div>
        </div>
        <div className="text-sm text-neutral-700 dark:text-neutral-300">{project.description}</div>

        <div className="flex items-center justify-between w-full">
          <div
            className={cn(
              "text-xs font-sans px-2 py-0.5 rounded-full",
              `${project.status === "Building" ? "bg-rose-500/20 text-rose-500" : "bg-green-500/30 text-lime-500"}`,
            )}
          >
            {project.status}
          </div>
          <div className="flex items-center gap-x-3"> {/* Increased gap for emphasis */}
            {project.tech.map((Icon, idx) => (
              <span key={idx} className="flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
