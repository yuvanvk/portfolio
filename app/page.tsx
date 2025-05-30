import { BlurFade } from "@/components/magicui/blur-fade";
import { CurrentProjects } from "@/components/porfolio/current-projects";
import { HeroSection } from "@/components/porfolio/hero-section";
import { NavBar } from "@/components/porfolio/navbar";
import { Projects } from "@/components/porfolio/projects";

import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-screen py-20">
      <SmoothCursor />
      <div>
        <BlurFade>
          <HeroSection />
          <CurrentProjects />
          <Projects />
        </BlurFade>
      </div>
      <NavBar />
    </div>
  );
}
