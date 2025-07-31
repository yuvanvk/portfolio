import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import GsapIcon from "../ui/gsap-icon"
import HonoJsIcon from "../ui/hono-icon";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { AiOutlineDocker } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TailwindCssIcon } from "../ui/tailwind-icon";
import { MotionIcon } from "../ui/motion-icon";

export const Skills = () => {
  

  const skills = [{
    icon: FaReact,
    title: "react"
  }, {
    icon: RiNextjsFill,
    title: "next.js"
  }, {
    icon: TailwindCssIcon,
    title: "tailwindcss"
  },{
    icon: GsapIcon,
    title: "gsap"
  }, {
    icon: MotionIcon,
    title: "motion"
  }, {
    icon: BiLogoTypescript,
    title: "typescript"
  }, {
    icon: SiExpress,
    title: "express"
  }, {
    icon: RiNodejsLine,
    title: "nodejs"
  }, {
    icon: HonoJsIcon,
    title: "hono"
  }, {
    icon: SiMongodb,
    title: "mongodb"
  }, {
    icon: BiLogoPostgresql,
    title: "postgres"
  }, {
    icon: SiPrisma,
    title: "prisma"
  }, {
    icon: FaAws,
    title: "aws"
  }, {
    icon: AiOutlineDocker,
    title: "docker"
  }, {
    icon: FaGitAlt,
    title: "git"
  }]
  
  return (
    <Card className="font-satoshi max-w-2xl bg-transparent border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-sm font-bold">skills</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-6 gap-1.5 justify-center text-xs">
        {skills.map((s, idx) => (
          <div key={idx} className="px-4 py-2 border rounded-lg hover:text-white dark:bg-neutral-900 hover:bg-neutral-800 transition duration-300 flex items-center gap-2  font-medium ">
            <s.icon />
            <div>{s.title}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
