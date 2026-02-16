import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/about";
import { MusicPlayer } from "@/components/sections/music-player";
import { Skills } from "@/components/sections/skills";
import { Container } from "@/components/wrapper/container";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
      <Container>
        <div className="px-2 md:px-0">
          <Header />
          <HeroSection />
          <Projects />
          <TechStack />
          {/* <Skills /> */}
          <MusicPlayer />
        </div>
      </Container>
  
  );
}
