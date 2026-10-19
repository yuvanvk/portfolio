import { ProjectCardProps } from "@/components/card/project-card";

interface Project extends ProjectCardProps {}

export const Projects: Project[] = [
  {
    title: "OneChat",
    description: "Chat now with multi-models in a single thread using OneChat.",
    image: "/project-images/onechat.png",
    href: "https://onechat.yuvan.me",
    github: "https://github.com/yuvanvk/onechat",
    status: "Live"
  },
  {
    title: "Terminal Agent",
    description: "A coding agent inside your terminal",
    image: "/project-images/ta.png",
    href: "",
    github: "https://github.com/yuvanvk/terminal-agent",
    status: "Live"
  },
  {
    title: "Roam",
    description: "AI travel executive for your company.",
    image: "/project-images/Roam (1).png",
    href: "https://heyroam.xyz",
    github: "",
    status: "Building"
  },
  {
    title: "Unfold",
    description: "Slick landing page inspired from Unfold website",
    image: "/project-images/unfold.png",
    href: "https://unfold-clone.vercel.app/",
    github: "https://github.com/yuvanvk/unfold-clone",
    status: "Live"
  },
];
