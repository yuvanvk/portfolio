import { GithubGraph } from "@/components/card/github-graph";
import { ProjectCard } from "@/components/card/project-card";
import { Projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className={cn("flex flex-col mt-10 gap-10 text-[15px] leading-6")}>
      <main>
        <p>
          Hi, I'm Abhi Vignesh{" "}
          <span className="text-muted-foreground">aka Yuvan</span>. Learned to
          code, and now building things that I like.
        </p>
        <p>
          In a career perspective I'm a Full Stack Developer with good taste in
          design{" "}
          <span className="text-muted-foreground">
            (not much but yeah decent)
          </span>{" "}
          and build scalable backend systems.
        </p>
        <br />
        <p>Currently tingering around Agentic Engineering.</p>
      </main>
      <section>
        <GithubGraph />
      </section>

      <section>
        <h2 className="mb-5">Projects</h2>
        <div className="grid grid-cols-2">
          {Projects.map((project, idx) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              href={project.href}
              github={project.github}
              status={project.status}
              key={idx}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
