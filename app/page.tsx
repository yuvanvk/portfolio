import { BlurFade } from "@/components/magicui/blur-fade";
import { CurrentProjects } from "@/components/porfolio/current-projects";
import { HeroSection } from "@/components/porfolio/hero-section";
import { NavBar } from "@/components/porfolio/navbar";
import { Projects } from "@/components/porfolio/projects";
import { Skills } from "@/components/porfolio/skills";

import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between py-10 md:py-20">
      <SmoothCursor />
      <div className="pb-10">
        <BlurFade>
          <HeroSection />
          <CurrentProjects />
          <Projects />
          <Skills />
        </BlurFade>
      </div>
      <NavBar />
    </div>
  );
}
