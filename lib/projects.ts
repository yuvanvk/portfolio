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
    title: "Kindle",
    description: "Fork it, describe the change, ship the PR.",
    image: "/project-images/kindle.png",
    href: "",
    github: "https://github.com/yuvanvk/kindle",
    status: "Building"
  },
  {
    title: "Yuvly",
    description: "Your travel buddy.",
    image: "/project-images/Yuvly (1).png",
    href: "",
    github: "https://github.com/slavanlabs/yuvly",
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
